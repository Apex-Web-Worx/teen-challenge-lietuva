import { useEffect, useState } from "react";
import { asset } from "@/lib/utils";
import { site } from "@/data/site";

const INTRO_MS = 2500;
const EXIT_MS = 700;
const STARTED_AT_KEY = "__tclLoaderStartedAt";

type LoaderWindow = Window & {
  [STARTED_AT_KEY]?: number;
};

function startedAt() {
  const view = window as LoaderWindow;
  if (!view[STARTED_AT_KEY]) {
    view[STARTED_AT_KEY] = Date.now();
  }
  return view[STARTED_AT_KEY];
}

function phaseFromElapsed(elapsed: number): "intro" | "leaving" | "done" {
  if (elapsed >= INTRO_MS + EXIT_MS) return "done";
  if (elapsed >= INTRO_MS) return "leaving";
  return "intro";
}

export function PageLoader() {
  const [phase, setPhase] = useState<"intro" | "leaving" | "done">("intro");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const tick = () => setPhase(phaseFromElapsed(Date.now() - startedAt()));
    tick();
    const id = window.setInterval(tick, 50);
    return () => window.clearInterval(id);
  }, []);

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
