import { type FormEvent, useState } from "react";
import { Button } from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const empty: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/tc.lietuva@gmail.com", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Unable to send contact form");
      }

      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="_subject" value="Nauja žinutė iš Teen Challenge Lietuva svetainės" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold text-navy">
          Vardas
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          className="w-full rounded-[12px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-navy"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold text-navy">
          El. paštas
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          className="w-full rounded-[12px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-navy"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold text-navy">
          Žinutė
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="w-full resize-y rounded-[12px] border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-navy"
          required
        />
      </div>
      {status === "error" ? (
        <p className="text-sm font-semibold text-red" role="alert">
          Nepavyko išsiųsti žinutės. Patikrinkite laukus ir bandykite dar kartą.
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm font-semibold text-green" role="status">
          Ačiū. Jūsų žinutė išsiųsta.
        </p>
      ) : null}
      <Button type="submit" variant="navy" disabled={status === "sending"}>
        {status === "sending" ? "Siunčiama..." : "Siųsti žinutę"}
      </Button>
    </form>
  );
}
