import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Section } from "./Section";
import { education } from "./data";

export function Education() {
  return (
    <Section
      id="formacao"
      eyebrow="Formação"
      title={
        <>
          Jornada <span className="text-gradient">acadêmica</span>
        </>
      }
      subtitle="Formação contínua em desenvolvimento de software e tecnologia."
    >
      <div className="relative max-w-3xl">
        {/* timeline line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <div className="space-y-8">
          {education.map((ed, i) => (
            <motion.div
              key={ed.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-14 sm:pl-20"
            >
              {/* node */}
              <div className="absolute left-0 sm:left-2 top-2">
                <div className="relative grid h-9 w-9 place-items-center rounded-xl glass-strong border border-border text-primary">
                  <GraduationCap className="h-4 w-4" />
                  <span className="absolute inset-0 rounded-xl bg-primary/20 blur-md -z-10" />
                </div>
              </div>

              <div className="rounded-2xl glass border border-border p-6 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary">
                    <Calendar className="h-3 w-3" />
                    {ed.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{ed.course}</h3>
                <p className="text-sm text-accent mt-1">{ed.institution}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{ed.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
