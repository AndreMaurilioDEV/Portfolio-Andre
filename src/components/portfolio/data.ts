export type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  skills: string[];
  repo?: string;
  accent: "cyan" | "purple" | "emerald";
  icon: "scissors" | "smartphone" | "shield" | "hospital";
};

export const projects: Project[] = [
  {
    id: "barbearia-api",
    title: "Barbearia API",
    short:
      "Backend para gestão de barbearia com agendamentos, serviços, profissionais, pagamentos, lembretes e fidelidade.",
    description:
      "API REST desenvolvida com Java e Spring Boot para centralizar a operação de uma barbearia, incluindo autenticação, controle de usuários, profissionais, serviços, agendamento por horário, fila de atendimento, pagamentos, lembretes automáticos e sistema de fidelidade.",
    features: [
      "Autenticação com JWT",
      "Login social com Google OAuth2",
      "Cadastro de usuários, profissionais e serviços",
      "Agendamento com horários dinâmicos",
      "Fila de atendimento com posição e previsão",
      "Controle de status do atendimento",
      "Pagamentos online e presenciais",
      "Lembretes automáticos por e-mail",
      "Sistema de fidelidade com pontos e níveis",
    ],
    skills: ["Java", "Spring Boot", "Spring Security", "JWT", "OAuth2", "Spring Data JPA", "MySQL", "Maven", "REST APIs", "Git"],
    repo: "https://github.com/AndreMaurilioDEV/Barbearia-back-end",
    accent: "cyan",
    icon: "scissors",
  },
  {
    id: "pivot",
    title: "Pivot",
    short:
      "Aplicativo Android para acompanhamento e gestão de ações estratégicas, pilares e atividades.",
    description:
      "Aplicativo Android desenvolvido para facilitar o acompanhamento e a gestão de ações estratégicas, pilares e atividades na Fecomércio, automatizando processos antes manuais em planilhas.",
    features: [
      "Persistência local com SQLite",
      "Modelagem de ações, pilares e notificações",
      "Cálculo de progresso de metas",
      "Navegação com ViewPager2 e Fragments",
      "Dashboards e telas responsivas",
      "Organização e versionamento com Git",
    ],
    skills: ["Android", "Java", "Kotlin", "SQLite", "ViewPager2", "Fragments", "ConstraintLayout", "Git"],
    repo: "https://github.com/AndreMaurilioDEV/Pivot",
    accent: "purple",
    icon: "smartphone",
  },
    {
    id: "clinica-backend",
    title: "ClinicCenter",
    short:
      "Backend para gestão de clínica com pacientes, médicos, consultas, autenticação JWT e recuperação de senha.",
    description:
      "API REST desenvolvida com Java e Spring Boot para centralizar a operação de uma clínica, incluindo autenticação segura com JWT, cadastro de pacientes, médicos e colaboradores, agendamento de consultas, controle de status, envio de e-mails para recuperação de senha e documentação interativa com Swagger/OpenAPI.",
    features: [
      "Autenticação com JWT",
      "Controle de usuários e permissões",
      "Cadastro e gerenciamento de pacientes",
      "Cadastro e gerenciamento de médicos",
      "Agendamento de consultas",
      "Controle de status de pacientes e consultas",
      "Recuperação de senha por e-mail",
      "Criptografia de senhas com BCrypt",
      "Tratamento global de exceções",
      "Documentação com Swagger/OpenAPI",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "MySQL",
      "Spring Mail",
      "Swagger/OpenAPI",
      "Maven",
      "REST APIs",
    ],
    repo: "https://github.com/AndreMaurilioDEV/ClinicaBackEnd",
    accent: "emerald",
    icon: "hospital",
  }
];

export const skillsByCategory: { category: string; items: string[] }[] = [
  {
    category: "Back-end",
    items: ["Java", "Spring Boot", "APIs RESTful", "Node.js", "Arquitetura de aplicações", "Boas práticas"],
  },
  {
    category: "Banco de Dados",
    items: ["MySQL", "Modelagem de dados", "Consultas SQL"],
  },
  {
    category: "Front-end",
    items: ["JavaScript", "React.js", "HTML", "CSS"],
  },
  {
    category: "DevOps & Ferramentas",
    items: ["Git", "GitHub", "Docker", "CI/CD", "Maven"],
  },
  {
    category: "Metodologias",
    items: ["Scrum", "Kanban", "Engenharia de Requisitos", "Trabalho em equipe"],
  },
];

export const education = [
  {
    institution: "Faculdade Senac Pernambuco",
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "2024 – 2026",
    description:
      "Formação voltada para desenvolvimento de software, programação, banco de dados, engenharia de requisitos, arquitetura de sistemas e práticas profissionais de tecnologia.",
  },
  {
    institution: "Trybe",
    course: "Desenvolvimento Web Full Stack",
    period: "2023 – 2024",
    description:
      "Formação intensiva com foco em desenvolvimento web, Java, SpringBoot, JavaScript, React.js, Node.js, bancos de dados, metodologias ágeis, Git, Docker, CI/CD e projetos avaliados por qualidade, organização e padronização de código.",
  },
];

export const softSkills = [
  "Comunicação",
  "Colaboração",
  "Organização",
  "Aprendizado contínuo",
  "Responsabilidade",
  "Pensamento analítico",
  "Adaptabilidade",
  "Foco em qualidade",
];
