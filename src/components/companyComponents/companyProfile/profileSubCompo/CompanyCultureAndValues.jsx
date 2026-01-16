import { Lightbulb, Users, Target, Heart } from "lucide-react";

const CompanyCultureAndValues = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Innovation */}
          <div className="flex gap-3">
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-[hsl(var(--color-primary))]" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Innovation</h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                We encourage creative thinking and embrace new ideas to solve
                problems.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="flex gap-3">
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                <Users className="h-5 w-5 text-[hsl(var(--color-primary))]" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Collaboration</h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                Teamwork and open communication are at the heart of everything
                we do.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div className="flex gap-3">
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                <Target className="h-5 w-5 text-[hsl(var(--color-primary))]" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Excellence</h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                We strive for the highest quality in our products and services.
              </p>
            </div>
          </div>

          {/* Integrity */}
          <div className="flex gap-3">
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                <Heart className="h-5 w-5 text-[hsl(var(--color-primary))]" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Integrity</h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                Honesty and transparency guide our decisions and actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyCultureAndValues;
