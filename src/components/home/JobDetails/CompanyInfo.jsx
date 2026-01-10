import { BiBuilding } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CompanyInfo = ({ company, category }) => {
  const navigate = useNavigate();

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">About Company</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
            {company?.logoUrl ? (
              <img
                src={company.logoUrl}
                alt={company.name}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <BiBuilding className="h-8 w-8 text-[hsl(var(--color-primary))]" />
            )}
          </div>
          <div>
            <h4 className="font-semibold">{company?.name}</h4>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              {category}
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <FiMapPin className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
            <span className="text-[hsl(var(--color-muted-foreground))]">
              {company?.location}
            </span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/company/${company?.id}`)}
          className="btn btn-outline w-full mt-4"
        >
          View Company Profile
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
