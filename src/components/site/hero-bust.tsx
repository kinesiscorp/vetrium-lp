"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero 3D: busto de mármore (escaneamento real, Poly Haven, CC0) com uma
 * bolha de chiclete rosa que infla dos lábios.
 *
 * Tese de movimento — um único momento autoral:
 *   1. o primeiro quadro é idêntico ao pôster estático (troca invisível);
 *      a luz acende e a câmera se aproxima de leve;
 *   2. a bolha infla da boca (ease-out longo, sem quique);
 *   3. em repouso, a cabeça acompanha o cursor com amortecimento e a bolha
 *      respira; ao rolar, o busto gira e se afasta junto com o hero.
 *
 * Custos sob controle: three.js entra por import dinâmico (fora do bundle
 * inicial), o loop para fora da tela/aba oculta, DPR limitado a 1,75 e, com
 * movimento reduzido, renderiza um quadro final estático.
 */

const MODEL = "/art/bust/marble_bust_01.gltf";

// Ajustes de cena (coordenadas do modelo: altura ≈ 0,51 unidade). A boca foi
// localizada por raycast; a bolha cresce na direção para onde o rosto aponta.
const BUST_YAW = -0.35; // rosto virado para a esquerda, em direção ao texto
const MOUTH = { x: -0.032, y: 0.318, z: 0.14 };
const FACE_DIR = { x: -0.25, z: 0.97 };
const BUBBLE_R = 0.033;
const CAM = { x: 0.02, y: 0.4, z: 1.3 };
const LOOK = { x: 0, y: 0.35, z: 0 };

export function HeroBust({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      if (disposed) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        return; // sem WebGL: o pôster estático continua no lugar
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTex;
      scene.environmentIntensity = 0.2;

      const camera = new THREE.PerspectiveCamera(22, 1, 0.01, 10);
      camera.position.set(CAM.x, CAM.y, CAM.z);
      camera.lookAt(LOOK.x, LOOK.y, LOOK.z);

      // Luz: chave violeta à esquerda, recorte rosa à direita, preenchimento frio fraco
      const key = new THREE.SpotLight(0xd4c6ff, 0, 6, 0.55, 0.6, 1.2);
      key.position.set(-1.0, 0.9, 0.9);
      key.target.position.set(0, 0.33, 0);
      const rim = new THREE.DirectionalLight(0xff5fa8, 0);
      rim.position.set(1.2, 0.7, -0.5);
      const fill = new THREE.HemisphereLight(0x8a5cff, 0x18181f, 0.2);
      const front = new THREE.DirectionalLight(0xfff4ea, 0);
      front.position.set(0.4, 0.6, 1.4);
      scene.add(key, key.target, rim, fill, front);

      const pivot = new THREE.Group();
      scene.add(pivot);

      const gltf = await new GLTFLoader().loadAsync(MODEL);
      if (disposed) return;
      const bust = gltf.scene;
      bust.traverse((o) => {
        const m = o as import("three").Mesh;
        if (m.isMesh) {
          const mat = m.material as import("three").MeshStandardMaterial;
          mat.envMapIntensity = 0.6;
          if (mat.map) mat.map.anisotropy = 4;
        }
      });
      pivot.add(bust);
      pivot.rotation.y = BUST_YAW;

      // Bolha de chiclete: vidro rosa leitoso com iridescência
      const bubble = new THREE.Mesh(
        new THREE.SphereGeometry(BUBBLE_R, 64, 48),
        new THREE.MeshPhysicalMaterial({
          color: 0xff6fb1,
          roughness: 0.18,
          metalness: 0,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          iridescence: 0.55,
          iridescenceIOR: 1.3,
          sheen: 0.4,
          sheenColor: new THREE.Color(0xffc2df),
          emissive: 0x3a0a22,
        }),
      );
      const placeBubble = (k: number) =>
        bubble.position.set(
          MOUTH.x + FACE_DIR.x * BUBBLE_R * 0.7 * k,
          MOUTH.y,
          MOUTH.z + FACE_DIR.z * BUBBLE_R * 0.7 * k,
        );
      placeBubble(0);
      bubble.scale.setScalar(0.001);
      pivot.add(bubble);

      const resize = () => {
        const w = host.clientWidth || 1;
        const h = host.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        // Quadro estreito (mobile) abre o campo para a cabeça não cortar
        camera.fov = camera.aspect < 0.9 ? 27 : 22;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      // Entrada: progresso 0→1 em ~2,4 s; a bolha começa aos 55%
      const easeOut = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 4);
      // O relógio da entrada só começa no primeiro quadro visível
      let start = -1;
      const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
      let scrollP = 0;

      const onPointer = (e: PointerEvent) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
      };
      const onScroll = () => {
        const r = host.getBoundingClientRect();
        scrollP = Math.min(Math.max(-r.top / (r.height || 1), 0), 1);
      };
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });

      const frame = (now: number) => {
        if (start < 0) start = now;
        const t = reduced ? 10 : (now - start) / 1000;
        const enter = easeOut(t / 2.2);
        const inflate = easeOut((t - 0.5) / 1.5);

        // Começa idêntico ao pôster (luz a 70%, sem bolha) e a luz "acende"
        const light = 0.7 + 0.3 * enter;
        key.intensity = 24 * light;
        rim.intensity = 5 * light;
        front.intensity = 0.45 * light;
        camera.position.z = CAM.z + (1 - enter) * 0.06;

        pointer.x += (pointer.tx - pointer.x) * 0.045;
        pointer.y += (pointer.ty - pointer.y) * 0.045;
        pivot.rotation.y = BUST_YAW + pointer.x * 0.22 + scrollP * 0.5;
        pivot.rotation.x = pointer.y * 0.06;
        pivot.position.y = -scrollP * 0.08;

        const breathe = reduced ? 1 : 1 + Math.sin(t * 1.6) * 0.025;
        bubble.scale.setScalar(Math.max(inflate * breathe, 0.001));
        placeBubble(inflate);

        renderer.render(scene, camera);
      };

      let raf = 0;
      let visible = true;
      const loop = (now: number) => {
        frame(now);
        raf = requestAnimationFrame(loop);
      };
      const play = () => {
        if (!raf && visible && !document.hidden && !reduced) raf = requestAnimationFrame(loop);
      };
      const pause = () => {
        cancelAnimationFrame(raf);
        raf = 0;
      };
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible) play();
        else pause();
      });
      io.observe(host);
      const onVis = () => (document.hidden ? pause() : play());
      document.addEventListener("visibilitychange", onVis);

      // Ajuste fino em dev: /?bust=debug expõe a cena no console.
      if (process.env.NODE_ENV !== "production" && location.search.includes("bust=debug")) {
        Object.assign(window, {
          __bust: { THREE, scene, camera, pivot, bubble, key, rim, front, fill, renderer, stop: () => pause(), render: () => renderer.render(scene, camera), frame },
        });
      }

      if (reduced) frame(performance.now());
      else {
        frame(performance.now());
        start = -1; // o quadro acima é o "t = 0" (igual ao pôster); o relógio reinicia
      }
      setReady(true);
      play();

      cleanup = () => {
        pause();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("scroll", onScroll);
        renderer.dispose();
        pmrem.dispose();
        envTex.dispose();
        renderer.domElement.remove();
      };
    })().catch((err) => console.warn("[hero-bust] WebGL indisponível", err));

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`transition-opacity duration-700 ${ready ? "bust-ready opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
