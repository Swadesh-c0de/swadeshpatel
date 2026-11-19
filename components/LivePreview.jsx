"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Loader2, MessageCircle, Play } from "lucide-react";

export default function LivePreview({ url, title }) {
  const [status, setStatus] = useState("idle");
  const loadButton = useRef(null);
  const demoLink = useRef(null);
  const isLoading = status === "loading";
  const showFrame = status === "preview";
  const timedOut = status === "timeout";

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setStatus((current) => current === "loading" ? "timeout" : current);
    }, 12000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const load = () => {
    if (!isLoading) setStatus("loading");
  };

  const showPreview = () => {
    if (!isLoading) return;
    if (document.activeElement === loadButton.current) {
      demoLink.current?.focus({ preventScroll: true });
    }
    // The load event can also fire for a browser error page.
    setStatus((current) => current === "loading" ? "preview" : current);
  };

  return (
    <div className="live-preview">
      <div className="preview-toolbar">
        <div className="preview-dots" aria-hidden="true"><span /><span /><span /></div>
        <span>{new URL(url).hostname}</span>
        <a ref={demoLink} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open demo for ${title} in a new tab`}>
          Open demo <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="preview-content">
        {(isLoading || showFrame) && (
          <iframe
            src={url}
            title={`${title} live demo`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="clipboard-write"
            referrerPolicy="no-referrer"
            className="preview-frame"
            inert={isLoading}
            onLoad={showPreview}
          />
        )}
        {!showFrame && (
          <div className="preview-placeholder">
            <MessageCircle size={28} strokeWidth={1.3} aria-hidden="true" />
            <p className="preview-title">{timedOut ? "Preview is taking a while." : "See it in action."}</p>
            <p className="preview-description" role="status">
              {isLoading ? "Loading preview…" : timedOut ? "Try again or open the demo in a new tab." : `Explore ${title} without leaving the portfolio.`}
            </p>
            <button ref={loadButton} type="button" onClick={load} aria-disabled={isLoading || undefined} className="preview-load">
              {isLoading ? <Loader2 size={13} className="motion-safe:animate-spin" aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
              {timedOut ? "Try again" : "Load live preview"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
