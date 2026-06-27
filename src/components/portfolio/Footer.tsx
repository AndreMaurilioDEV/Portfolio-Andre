import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold font-mono text-sm">
              AM
            </div>
            <span className="font-semibold text-foreground">André Maurilio</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} André Maurilio. Desenvolvido com React.js.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/AndreMaurilioDEV/"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/andremaurilio/"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:andreandrade1920@gmail.com"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
