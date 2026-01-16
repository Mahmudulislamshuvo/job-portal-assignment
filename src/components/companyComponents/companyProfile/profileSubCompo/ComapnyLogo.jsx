import { Building2 } from "lucide-react";

const ComapnyLogo = ({ data }) => {
  return (
    <>
      <div className="shrink-0">
        <div className="h-32 w-32 rounded-xl bg-[hsl(var(--color-secondary))] flex items-center justify-center">
          {data?.logoUrl ? (
            <img src={data?.logoUrl} alt={`${data?.name} Company Logo`} />
          ) : (
            <Building2 className="h-16 w-16 text-[hsl(var(--color-primary))]" />
          )}
        </div>
      </div>
    </>
  );
};

export default ComapnyLogo;
