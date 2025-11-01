import { portfolio } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About",
  description: "About Uddipta Gogoi - Full Stack Developer",
  openGraph: {
    title: "About | Uddipta Gogoi",
    description: "About Uddipta Gogoi - Full Stack Developer",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  const { profile, experience, education, skills, certifications } = portfolio;
  
  return (
    <div className="min-h-screen py-12">
      <div className="main-container max-w-4xl">
        {/* Profile Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {profile.detailedBio || profile.bio}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>📍 {profile.location}</span>
            <span>✉️ {profile.email}</span>
            {profile.availability && <span>✓ {profile.availability}</span>}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/20 pb-8 last:pb-0"
              >
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary border-2 border-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{exp.description}</p>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((ed, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{ed.degree}</h3>
                    <p className="text-muted-foreground">{ed.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ed.field}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                    {ed.startDate} – {ed.endDate}
                  </span>
                </div>
                {ed.gpa && (
                  <p className="text-sm text-muted-foreground mt-2">GPA: {ed.gpa}</p>
                )}
                {ed.courses && ed.courses.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Key Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {ed.courses.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Summary */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills Summary</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills
              .filter((s) => s.level >= 80)
              .slice(0, 9)
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}