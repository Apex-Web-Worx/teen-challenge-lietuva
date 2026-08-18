import { Link, Redirect, useParams } from "wouter";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { getProgramBySlug, programs } from "@/data/programs";
import { useSeo } from "@/hooks/useSeo";
import { asset } from "@/lib/utils";

export default function ProgramDetail() {
  const params = useParams<{ slug: string }>();
  const program = getProgramBySlug(params.slug ?? "");

  useSeo({
    title: program?.title ?? "Programa",
    description: program?.description,
  });

  if (!program) {
    return <Redirect to="/musu-veikla" />;
  }

  const others = programs.filter((item) => item.id !== program.id);

  return (
    <Layout>
      <PageHero title={program.title} description={program.description} image={program.image} />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-dark">
              {program.number}
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <DetailFact label="Vieta" value={program.location} />
              <DetailFact label="Kam skirta" value={program.audience} />
              <DetailFact label="Veikia nuo" value={program.established} />
              {program.duration ? (
                <DetailFact label="Programos trukmė" value={program.duration} />
              ) : null}
            </dl>
            <div className="mt-8 space-y-4 text-muted">
              {program.longDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/pagalba" variant="navy">
                Gauti pagalbą
              </Button>
              <Button href="/kontaktai" variant="gold">
                Susisiekti
              </Button>
            </div>
          </div>
          <img
            src={asset(program.image)}
            alt={program.imageAlt}
            className="w-full rounded-[16px] object-cover"
          />
        </div>
        {others.length > 0 ? (
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-navy">Kiti centrai</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {others.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-[14px] border border-line p-5 transition hover:-translate-y-0.5 hover:border-navy/20"
                >
                  <p className="text-xs font-extrabold text-gold-dark">{item.number}</p>
                  <p className="mt-2 font-extrabold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </Layout>
  );
}

function DetailFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-line bg-canvas px-4 py-3">
      <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold-dark">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-bold text-navy">{value}</dd>
    </div>
  );
}
