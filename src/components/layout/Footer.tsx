import Link from "next/link";

type Social = {
  platform: string;
  url: string;
  icon?: string;
};

export function Footer({ socials = [] }: { socials: Social[] }) {

  return (
    <footer className="border-t bg-muted/30">
      <div className="main-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-medium">Uddipta Gogoi</p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {social.platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}