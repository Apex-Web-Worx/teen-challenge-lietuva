import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ProgramsSection } from "@/components/ProgramsSection";
import { programsIntro } from "@/data/programs";
import { useSeo } from "@/hooks/useSeo";

export default function Programs() {
  useSeo({
    title: programsIntro.title,
    description:
      "Teen Challenge vyrų savarankiško gyvenimo centras Pikeliuose. Pagalba vyrams, siekiantiems įveikti priklausomybes.",
  });

  return (
    <Layout>
      <PageHero
        title={programsIntro.title}
        description="Krikščioniški savarankiškumo namai Pikeliuose."
        image="images/community.jpg"
      />
      <ProgramsSection showIntro={false} />
    </Layout>
  );
}
