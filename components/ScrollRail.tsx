import { useEffect, useState } from "react";

export const ScrollRail = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const railH = 180;
  const thumbH = Math.max(20, railH * 0.18);
  const maxTop = railH - thumbH;
  const thumbTop = progress * maxTop;

  return (
    <div className="scroll-rail">
      <div className="scroll-thumb" style={{ top: thumbTop, height: thumbH }} />
    </div>
  );
};