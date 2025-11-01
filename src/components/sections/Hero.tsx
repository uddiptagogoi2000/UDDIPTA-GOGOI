import Link from "next/link";
import { portfolio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function Hero() {
  const { profile } = portfolio;
  
  return (
    <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 lg:pb-20 overflow-hidden">
      <div className="main-container main-grid relative gap-y-6">
        {/* Hero Image Background */}
        <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] w-full sm:row-start-1">
          <ImageWithFallback
            src={profile.avatar}
            alt={`${profile.name} - ${profile.title}`}
            fill
            type="avatar"
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Overlay Content */}
        <div className="z-10 flex flex-col items-start gap-6 bg-background/95 backdrop-blur-sm sm:col-start-1 sm:col-end-10 sm:row-start-1 sm:gap-8 sm:self-end sm:pr-8 sm:pt-8 lg:col-end-7 lg:gap-12 lg:pr-14 lg:pt-14">
          <h1 className="heading-1 text-foreground">
            Hey, I'm <span className="text-primary">{profile.name.split(' ')[0]}</span> and I love building beautiful websites
          </h1>
          <Button asChild variant="default" size="lg" className="gap-2 group">
            <Link href="#about" className="flex items-center">
              <span>About me</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}