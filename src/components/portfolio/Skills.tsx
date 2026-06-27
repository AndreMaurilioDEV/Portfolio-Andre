import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillsByCategory } from "./data";
import {
  Server, Database, Code2, Wrench, Users,
} from "lucide-react";

const categoryIcons: Record<string, typeof Server> = {
  "Back-end": Server,
  "Banco de Dados": Database,
  "Front-end": Code2,
  "DevOps & Ferramentas": Wrench,
  "Metodologias": Users,
};

export function Skills() {
  const allBadges = skillsByCategory.flatMap((c) => c.items);
  // duplicate for seamless marquee
  const marquee = [...allBadges, ...allBadges];

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Stack <span className="text-gradient">técnica</span>
        </>
      }
      subtitle="Tecnologias, ferramentas e práticas que utilizo no dia a dia."
    >
      {/* Marquee carousel */}
      <div className="relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 w-max animate-marquee">
          {marquee.map((s, i) => (
            <div
              key={`${s}-${i}`}
              className="shrink-0 rounded-full glass border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted/50 transition-colors"
            >
              <span className="font-mono text-xs text-primary mr-2">›</span>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsByCategory.map((cat, i) => {
          const Icon = categoryIcons[cat.category] ?? Code2;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl glass border border-border p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-border text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs text-foreground/90 hover:bg-muted/60 hover:scale-105 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
