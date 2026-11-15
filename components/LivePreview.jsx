"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Loader2, MessageCircle, Play } from "lucide-react";

export default function LivePreview({ url, title }) {
  const [status, setStatus] = useState("idle");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (status !== "loading") return;
    const timer = setTimeout(() => setStatus("unavailable"), 12000);
    return () => clearTimeout(timer);
  }, [status, attempt]);

  const load = () => {
    setAttempt((previous) => previous + 1);
    setStatus("loading");
  };

  return (
    <div className="live-preview">
      <div className="preview-toolbar">
        <div className="preview-dots" aria-hidden="true"><span /><span /><span /></div>
        <span>{new URL(url).hostname}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} in a new tab`}><ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <div className="preview-content">
        {(status === "loading" || status === "ready") && (
          <iframe
            key={attempt}
            src={url}
            title={`${title} live demo`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="clipboard-write"
            referrerPolicy="no-referrer"
            className={status === "ready" ? "preview-frame is-ready" : "preview-frame"}
            onLoad={() => setStatus("ready")}
            onError={() => setStatus("unavailable")}
          />
        )}
        {status !== "ready" && (
          <div className="preview-placeholder">
            {status === "loading" ? (
              <p role="status"><Loader2 size={20} className="animate-spin" aria-hidden="true" />Loading preview…</p>
            ) : (
              <>
                <MessageCircle size={28} strokeWidth={1.3} aria-hidden="true" />
                <p className="preview-title">{status === "idle" ? "See it in action." : "Preview couldn’t load."}</p>
                <p className="preview-description">{status === "idle" ? `Explore ${title} without leaving the portfolio.` : "Try again or open the demo in a new tab."}</p>
                <button type="button" onClick={load} className="preview-load"><Play size={13} aria-hidden="true" />{status === "idle" ? "Load live preview" : "Try again"}</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
