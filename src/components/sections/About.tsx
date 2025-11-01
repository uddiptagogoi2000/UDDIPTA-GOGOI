import Link from "next/link";
import { portfolio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function About() {
  const { profile } = portfolio;
  
  return (
    <section id="about" className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
      <div className="main-container main-grid">
        <div className="relative h-[250px] sm:h-[350px] lg:h-[600px] w-full sm:col-start-1 sm:col-end-7 sm:row-start-1 lg:col-end-7">
          <ImageWithFallback
            src={profile.avatar}
            alt={profile.name}
            fill
            type="avatar"
            className="object-cover object-center sm:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
          />
        </div>
        
        <div className="my-8 space-y-6 border-y border-border py-8 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:my-0 sm:pt-12 lg:col-start-8 lg:col-end-12">
          <h2 className="heading-2">About me</h2>
          <p className="text-[0.9375rem] sm:text-base text-muted-foreground leading-relaxed">
            {profile.detailedBio || profile.bio}
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">Go to portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}