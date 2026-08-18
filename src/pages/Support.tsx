import { useMemo, useState } from "react";
import { useSearch } from "wouter";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { DonationAmountRow } from "@/components/DonationButton";
import { useSeo } from "@/hooks/useSeo";

export default function Support() {
  const search = useSearch();
  const initialAmount = useMemo(() => {
    const value = Number(new URLSearchParams(search).get("suma"));
    return Number.isFinite(value) && value > 0 ? value : 50;
  }, [search]);
  const [amount, setAmount] = useState<number | null>(initialAmount);
  const [notice, setNotice] = useState("");

  useSeo({
    title: "Parama",
    description:
      "Paremkite Teen Challenge Lietuva veiklą. Mokėjimų sistema dar neprijungta.",
  });

  return (
    <Layout>
      <PageHero
        title="Parama"
        description="Jūsų dovana padeda kurti aplinką, kurioje žmogus gali atrasti viltį ir naują pradžią."
        image="images/support.jpg"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-navy">Paremti dabar</h2>
          <p className="mt-4 text-muted">
            Mokėjimų apdorojimas dar neprijungtas. Šiame puslapyje galima pasirinkti
            sumą, kad vėliau būtų paprasta įdiegti mokėjimo tiekėją.
          </p>
          <DonationAmountRow
            className="mt-8"
            value={amount}
            onChange={setAmount}
            tone="light"
          />
          <div className="mt-5 max-w-xs">
            <label htmlFor="donation-custom-support" className="mb-1.5 block text-sm font-bold text-navy">
              Kita suma (€)
            </label>
            <input
              id="donation-custom-support"
              type="number"
              min="1"
              step="0.01"
              inputMode="decimal"
              placeholder="Įveskite sumą"
              onChange={(event) => {
                const value = Number(event.currentTarget.value);
                setAmount(Number.isFinite(value) && value > 0 ? value : null);
              }}
              className="w-full rounded-[12px] border border-line bg-white px-4 py-3 font-bold text-navy outline-none transition focus:border-navy"
            />
          </div>
          <p className="mt-6 text-lg font-extrabold text-navy">
            Pasirinkta suma: {amount ? `${amount} €` : "nepasirinkta"}
          </p>
          {notice ? (
            <p className="mt-4 text-sm font-semibold text-green" role="status">
              {notice}
            </p>
          ) : null}
          <div className="mt-8">
            <Button
              variant="gold"
              arrow
              onClick={() => {
                setNotice(
                  amount
                    ? `Pasirinkta ${amount} €. Mokėjimų sistema dar neprijungta.`
                    : "Pasirinkite sumą. Mokėjimų sistema dar neprijungta.",
                );
              }}
            >
              Paremti dabar
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
