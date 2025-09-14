import { useEffect, useRef, useState } from "react";
import bgmUrl from "@/assets/music/wedding.mp3"; // đổi đường dẫn nếu không dùng alias "@"

// helper: lắng nghe một lần
function once<K extends keyof DocumentEventMap>(type: K, handler: (e: DocumentEventMap[K]) => void) {
  const fn = (e: any) => { handler(e); document.removeEventListener(type, fn as any); };
  document.addEventListener(type, fn as any, { passive: true });
  return () => document.removeEventListener(type, fn as any);
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null); // tạo SAU khi có gesture
  const [playing, setPlaying] = useState<boolean>(() => localStorage.getItem("bgm:muted") !== "true");
  const [needsInteract, setNeedsInteract] = useState(false);

  // mount: tạo thẻ audio nhưng KHÔNG tạo AudioContext
  useEffect(() => {
    const audio = new Audio(bgmUrl);
    audio.loop = true;
    audio.preload = "auto";
    audio.crossOrigin = "anonymous";
    (audio as any).playsInline = true; // iOS
    audio.volume = 0.6;
    audioRef.current = audio;

    const tryAutoplay = async () => {
      if (!playing) return;
      try {
        // thử autoplay trực tiếp (không AudioContext)
        await audio.play();
        setNeedsInteract(false);
      } catch {
        // bị chặn → đợi gesture rồi mới tạo AudioContext và play
        setNeedsInteract(true);
        const unlock = async () => {
          try {
            // TẠO AUDIOCONTEXT Ở ĐÂY (sau gesture)
            if (!ctxRef.current) {
              // @ts-ignore
              const AC = window.AudioContext || (window as any).webkitAudioContext;
              ctxRef.current = new AC();
              const node = ctxRef.current.createMediaElementSource(audio);
              node.connect(ctxRef.current.destination);
            }
            // Chỉ resume nếu context đã được tạo và chưa bị đóng
            if (ctxRef.current && ctxRef.current.state !== 'closed') {
              await ctxRef.current.resume();
            }
            await audio.play();
            setNeedsInteract(false);
          } catch {/* ignore */}
        };
        const cleanups = [
          once("pointerdown", unlock),
          once("touchstart", unlock),
          once("keydown", unlock),
          once("wheel", unlock),
          once("scroll", unlock),
          once("visibilitychange", unlock),
        ];
        // cleanup khi unmount
        return () => cleanups.forEach((c) => c && c());
      }
    };

    const cleanup = tryAutoplay();
    return () => {
      if (typeof cleanup === "function") cleanup();
      audio.pause();
      audio.src = "";
      audioRef.current = null;
      // Đóng AudioContext khi unmount
      if (ctxRef.current && ctxRef.current.state !== 'closed') {
        ctxRef.current.close();
      }
    };
  }, []); // chỉ chạy một lần

  // phản ứng khi user bấm nút play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setNeedsInteract(true));
    } else {
      audio.pause();
    }
  }, [playing]);

  const toggle = () => {
    const next = !playing;
    setPlaying(next);
    localStorage.setItem("bgm:muted", (!next).toString());
  };

  return (
    <div className="fixed right-3 bottom-3 z-50 select-none">
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="rounded-full shadow-lg border bg-white/70 backdrop-blur px-3 py-2 hover:bg-white transition"
      >
        <span className="font-medium">{playing ? "🔊 Music On" : "🔈 Music Off"}</span>
      </button>
      {needsInteract && (
        <div className="mt-2 text-xs text-gray-600 bg-white/80 rounded px-2 py-1 shadow">
          Tap/click to enable sound
        </div>
      )}
    </div>
  );
}
