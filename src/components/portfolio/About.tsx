import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { softSkills } from "./data";
import {
  MessageCircle, Users, ListChecks, BookOpen, ShieldCheck, BrainCircuit, Sparkles, Target,
} from "lucide-react";

const iconFor: Record<string, typeof MessageCircle> = {
  "Comunicação": MessageCircle,
  "Colaboração": Users,
  "Organização": ListChecks,
  "Aprendizado contínuo": BookOpen,
  "Responsabilidade": ShieldCheck,
  "Pensamento analítico": BrainCircuit,
  "Adaptabilidade": Sparkles,
  "Foco em qualidade": Target,
};

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre"
      title={
        <>
          Sobre <span className="text-gradient">mim</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Possuo formação em <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas</span> na
            Faculdade Senac Pernambuco e formado em <span className="text-foreground font-medium">Desenvolvimento Web Full Stack</span> pela Trybe.
            Tenho direcionado minha trajetória para o desenvolvimento back-end, com foco em
            Java, Spring Boot, APIs RESTful, modelagem de dados e boas práticas.
          </p>
          <p>
            Minha formação me proporcionou uma base sólida em programação, bancos de dados,
            metodologias ágeis e trabalho em equipe. Durante esse período, participei de
            projetos práticos avaliados por critérios de qualidade, organização, clareza e
            padronização de código.
          </p>
          <p>
            Busco oportunidades para aplicar e evoluir minhas habilidades em ambientes
            colaborativos, contribuindo com responsabilidade, aprendizado contínuo, comunicação
            clara, organização e visão de produto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {softSkills.map((s, i) => {
            const Icon = iconFor[s] ?? Sparkles;
            return (
              <motion.div
                key={s}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group rounded-xl glass border border-border p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-4 w-4 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">{s}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
