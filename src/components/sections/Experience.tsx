import { portfolio } from "@/lib/data";

export function Experience() {
  const skills = portfolio.skills.filter((s) => s.years).slice(0, 6);
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="main-container">
        <h2 className="heading-2 mb-12 text-center">Experience</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-border rounded-lg p-6 bg-background hover:shadow-md transition-all hover:border-primary/50"
            >
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.years} Years Experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}