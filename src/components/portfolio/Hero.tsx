import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Database, Server, Container, GitBranch, Cloud } from "lucide-react";
import heroImage from "../../assets/hero-tech.jpg";

const techBadges = [
  { label: "Java", icon: Server, x: "5%", y: "10%", delay: 0 },
  { label: "Spring Boot", icon: Cloud, x: "85%", y: "20%", delay: 0.4 },
  { label: "MySQL", icon: Database, x: "0%", y: "70%", delay: 0.8 },
  { label: "Docker", icon: Container, x: "88%", y: "75%", delay: 1.2 },
  { label: "REST APIs", icon: GitBranch, x: "45%", y: "0%", delay: 1.6 },
];

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full glass border border-border px-3 py-1 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              <span className="text-xs font-mono text-muted-foreground">disponível para oportunidades</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              André<br />
              <span className="text-gradient">Maurilio</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              Desenvolvedor Back-end, focado em{" "}
              <span className="text-foreground font-medium">Java</span>,{" "}
              <span className="text-foreground font-medium">Spring Boot</span> e{" "}
              <span className="text-foreground font-medium">APIs RESTful</span>.
            </p>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground/80 max-w-xl">
              Construo aplicações com foco em regras de negócio, persistência de dados,
              autenticação, organização de código e boas práticas de desenvolvimento.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] hover:shadow-[0_0_60px_oklch(0.75_0.18_220/40%)] transition-all"
              >
                Ver projetos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/andremaurilio/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/AndreMaurilioDEV/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Image / Tech panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-square max-w-lg mx-auto w-full"
          >
            {/* Glow background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-emerald/20 blur-3xl opacity-60 animate-pulse-glow" />

            {/* Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative glow-border rounded-3xl overflow-hidden glass-strong"
            >
              <img
                src={heroImage}
                alt="Ambiente de desenvolvimento back-end com API, banco de dados, Docker e cloud"
                width={1024}
                height={1024}
                className="w-full h-full object-cover opacity-90"
              />
              {/* Code overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl glass-strong border border-border p-3 font-mono text-xs">
                <div className="flex gap-1.5 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
                </div>
                <div className="text-muted-foreground">
                  <span className="text-purple">@RestController</span><br />
                  <span className="text-cyan">public class</span>{" "}
                  <span className="text-foreground">AppController</span> {"{"}
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            {techBadges.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.5 + b.delay * 0.1, duration: 0.5 },
                    scale: { delay: 0.5 + b.delay * 0.1, duration: 0.5 },
                    y: { duration: 4 + b.delay, repeat: Infinity, ease: "easeInOut", delay: b.delay },
                  }}
                  style={{ left: b.x, top: b.y }}
                  className="absolute z-10 inline-flex items-center gap-1.5 glass-strong border border-border rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-card)]"
                >
                  <Icon className="h-3.5 w-3.5 text-cyan" />
                  {b.label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
