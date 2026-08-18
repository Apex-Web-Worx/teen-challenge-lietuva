import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/Button";
import { introVideo } from "@/data/site";
import { asset } from "@/lib/utils";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [videoOpen]);

  return (
    <section className="relative isolate min-h-[560px] overflow-hidden md:min-h-[680px] md:h-[72vh] md:max-h-[750px]">
      <img
        src={asset("images/hero.jpg")}
        alt="Žmogus, stovintis ant kalno ir žvelgiantis į saulėtekį – vilties ir naujos pradžios iliustracija"
        className="absolute inset-0 size-full object-cover object-[center_45%]"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy-dark/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/55 via-transparent to-navy-dark/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 md:min-h-[680px] lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="hero-fade text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            Teen Challenge Lietuva
          </p>
          <h1 className="hero-fade hero-fade-delay-1 mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Keičiame gyvenimus.
            <span className="mt-2 block">Teikiame viltį.</span>
          </h1>
          <p className="hero-fade hero-fade-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/88">
            Padedame žmonėms įveikti priklausomybes, atrasti laisvę ir kurti naują
            gyvenimo kryptį.
          </p>
          <p className="hero-fade hero-fade-delay-2 mt-3 text-sm text-white/55">
            Šis tekstas yra laikinas, kol bus patvirtinta oficiali organizacijos žinutė.
          </p>
          <div className="hero-fade hero-fade-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/apie-mus" variant="white">
              Sužinoti daugiau
            </Button>
            <Button variant="outline" onClick={() => setVideoOpen(true)}>
              <Play className="size-4 fill-current" aria-hidden="true" />
              Peržiūrėti video
            </Button>
            <Button href="/parama" arrow>
              Paremti mūsų veiklą
            </Button>
          </div>
        </div>
      </div>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-dark/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-title"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-[16px] bg-navy-dark shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <h2 id="video-title" className="text-sm font-extrabold uppercase tracking-wide text-white">
                {introVideo.title}
              </h2>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Uždaryti vaizdo įrašą"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${introVideo.id}?autoplay=1&rel=0`}
                title={introVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="size-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
