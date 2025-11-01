import { portfolio } from "@/lib/data";
import { ContactForm } from "@/components/ui/ContactForm";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Uddipta Gogoi - Get in touch",
  openGraph: {
    title: "Contact | Uddipta Gogoi",
    description: "Contact Uddipta Gogoi - Get in touch",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  const { profile, socials } = portfolio;

  return (
    <div className="min-h-screen py-12">
      <div className="main-container max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base hover:text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
                {profile.phone && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-base hover:text-primary transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="text-base">{profile.location}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow me</h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-primary transition-colors"
                  >
                    {social.platform}
                  </Link>
                ))}
              </div>
            </div>

            {profile.availability && (
              <>
                <Separator />
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-medium">{profile.availability}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}