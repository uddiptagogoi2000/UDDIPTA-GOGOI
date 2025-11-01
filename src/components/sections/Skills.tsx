import { portfolio } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = Array.from(new Set(portfolio.skills.map((s) => s.category)));
  
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="main-container">
        <h2 className="heading-2 mb-12">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary font-serif">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <Badge key={skill.name} variant="outline" className="text-sm py-1.5 px-3">
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}