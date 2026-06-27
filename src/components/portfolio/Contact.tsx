import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Check } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title={
        <>
          Vamos <span className="text-gradient">conversar?</span>
        </>
      }
      subtitle="Estou aberto a oportunidades como Desenvolvedor Back-end, Java/Spring Boot ou Full Stack Júnior"
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <ContactLink
            href="https://www.linkedin.com/in/andremaurilio/"
            icon={Linkedin}
            label="LinkedIn"
            value="/in/andremaurilio"
          />
          <ContactLink
            href="https://github.com/AndreMaurilioDEV/"
            icon={Github}
            label="GitHub"
            value="@AndreMaurilioDEV"
          />
          <ContactLink
            href="mailto:andreandrade1920@gmail.com"
            icon={Mail}
            label="Email"
            value="andreandrade1920@gmail.com"
          />
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={onSubmit}
          className="rounded-2xl glass border border-border p-6 sm:p-8 space-y-5 glow-border"
        >
          <Field label="Nome" name="name" placeholder="Seu nome" />
          <Field label="Email" name="email" type="email" placeholder="voce@email.com" />
          <Field
            label="Mensagem"
            name="message"
            placeholder="Conte um pouco sobre a oportunidade..."
            textarea
          />

          <button
            type="submit"
            disabled={sent}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] hover:shadow-[0_0_60px_oklch(0.75_0.18_220/40%)] transition-all disabled:opacity-80"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Mensagem enviada
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Enviar mensagem
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactLink({
  href, icon: Icon, label, value,
}: {
  href: string; icon: typeof Github; label: string; value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl glass border border-border p-4 sm:p-5 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
    >
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border text-primary group-hover:scale-110 transition-transform">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm sm:text-base text-foreground truncate">{value}</div>
      </div>
    </a>
  );
}

function Field({
  label, name, type = "text", placeholder, textarea,
}: {
  label: string; name: string; type?: string; placeholder?: string; textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl bg-muted/30 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={cls} required />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} required />
      )}
    </label>
  );
}
