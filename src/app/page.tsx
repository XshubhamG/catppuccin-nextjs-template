import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-mono text-sm font-medium text-primary">
            Catppuccin Template
          </h2>
          <ThemeToggle />
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://nextjs.org/docs"
              className="font-medium text-blue underline decoration-blue/30 underline-offset-4 transition-colors hover:text-sapphire hover:decoration-sapphire/50"
            >
              Next.js Docs
            </a>{" "}
            to learn more.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-on-primary transition-colors hover:bg-teal/90 md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-surface1 px-5 text-foreground transition-colors hover:bg-surface0 md:w-[158px]"
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
