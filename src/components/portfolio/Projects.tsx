import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Scissors, Smartphone, Shield, X, Sparkles, Hospital } from "lucide-react";
import { Section, fadeUp } from "./Section";
import { projects, type Project } from "./data";

const iconMap = { scissors: Scissors, smartphone: Smartphone, shield: Shield, hospital: Hospital };
const accentMap = {
  cyan: "from-cyan/30 to-primary/20",
  purple: "from-purple/30 to-accent/20",
  emerald: "from-emerald/30 to-cyan/20",
};
const accentText = {
  cyan: "text-cyan",
  purple: "text-purple",
  emerald: "text-emerald",
};

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title={
        <>
          Construído com <span className="text-gradient">propósito</span>
        </>
      }
      subtitle="Uma seleção de projetos focados em back-end, APIs e arquitetura."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => {
          const Icon = iconMap[p.icon];
          return (
            <motion.button
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              onClick={() => setSelected(p)}
              className="group relative text-left rounded-2xl glass border border-border p-6 overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_oklch(0.05_0.02_265/60%)]"
            >
              {/* gradient halo */}
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accentMap[p.accent]} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl glass-strong border border-border ${accentText[p.accent]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-5">{p.short}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider rounded-md border border-border bg-muted/40 px-2 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                  {p.skills.length > 4 && (
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 text-muted-foreground/70">
                      +{p.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-[70] w-full sm:max-w-xl lg:max-w-2xl glass-strong border-l border-border overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-border bg-background/60 backdrop-blur-xl">
              <div className="font-mono text-xs text-muted-foreground">projeto / {project.id}</div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-muted/50 transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full glass border border-border px-3 py-1 text-xs ${accentText[project.accent]} mb-4`}>
                  <Sparkles className="h-3 w-3" /> destaque
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-primary mb-3">Funcionalidades</h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/90">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentText[project.accent]} bg-current`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-primary mb-3">Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-primary mb-3">Aprendizados</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aprofundamento em arquitetura de aplicações, segurança, modelagem de dados,
                  organização de código e boas práticas — sempre priorizando clareza, manutenibilidade
                  e qualidade da entrega.
                </p>
              </div>

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
                >
                  <Github className="h-4 w-4" /> Ver repositório no GitHub
                </a>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
