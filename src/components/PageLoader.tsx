import { useEffect, useState } from "react";
import { asset } from "@/lib/utils";
import { site } from "@/data/site";

const INTRO_MS = 2500;
const EXIT_MS = 700;

export function PageLoader() {
  const [phase, setPhase] = useState<"intro" | "leaving" | "done">("intro");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setPhase("done");
      return;
    }

    document.documentElement.classList.add("tcl-loading");

    const leaveTimer = window.setTimeout(() => setPhase("leaving"), INTRO_MS);
    const doneTimer = window.setTimeout(() => setPhase("done"), INTRO_MS + EXIT_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.documentElement.classList.remove("tcl-loading");
    };
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.documentElement.classList.remove("tcl-loading");
    }
  }, [phase]);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={`tcl-loader ${phase === "leaving" ? "is-leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="tcl-loader-flagbar" />

      <div className="tcl-loader-stage">
        <div className="tcl-loader-hero">
          <div className="tcl-loader-flag-slot">
            <div className="tcl-loader-flag">
              <span className="tcl-loader-flag-stripe tcl-loader-flag-yellow" />
              <span className="tcl-loader-flag-stripe tcl-loader-flag-green" />
              <span className="tcl-loader-flag-stripe tcl-loader-flag-red" />
            </div>
          </div>

          <div className="tcl-loader-card">
            <div className="tcl-loader-mark-wrap">
              <img
                src={asset("images/logo.png")}
                alt=""
                width={220}
                height={216}
                className="tcl-loader-mark"
              />
            </div>
          </div>
        </div>

        <p className="tcl-loader-wordmark">
          <span>Teen Challenge</span>
          <span>Lietuva</span>
        </p>
        <span className="sr-only">{site.name}</span>
      </div>
    </div>
  );
}
