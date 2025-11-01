import Link from "next/link";
import { portfolio } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { profile } = portfolio;
  
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="main-container">
        <div className="rounded-xl border border-border bg-muted/30 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="heading-2 mb-4">
            Interested in doing a project together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-base sm:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact me</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`mailto:${profile.email}`}>Email me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}