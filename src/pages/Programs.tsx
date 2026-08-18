import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ProgramsSection } from "@/components/ProgramsSection";
import { programsIntro } from "@/data/programs";
import { useSeo } from "@/hooks/useSeo";

export default function Programs() {
  useSeo({
    title: programsIntro.title,
    description:
      "Trys Teen Challenge Lietuva reabilitacijos centrai – Veržuva, Šlienava ir Pikeliai. Pagalba visą parą vyrams, moterims ir mamoms su vaikais.",
  });

  return (
    <Layout>
      <PageHero
        title={programsIntro.title}
        description="Trys reabilitacijos centrai Lietuvoje: Veržuva, Šlienava ir Pikeliai."
        image="images/community.jpg"
      />
      <ProgramsSection showIntro={false} />
    </Layout>
  );
}
