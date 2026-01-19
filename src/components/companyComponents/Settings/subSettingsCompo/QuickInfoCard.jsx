import { Building2 } from "lucide-react";

const QuickInfoCard = ({ companyData }) => {
  const companyInfo = companyData?.data;

  console.log(companyInfo);

  return (
    <div className="card p-6 mt-6">
      <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
          {companyInfo?.logoUrl ? (
            <img
              src={`${import.meta.env.VITE_SERVER_URL}${companyInfo?.logoUrl}`}
              alt="Company Logo"
            />
          ) : (
            <Building2 className="h-12 w-12 text-white" />
          )}
        </div>
        <h3 className="font-semibold mb-1">TechCorp Solutions</h3>
        <p className="text-xs text-[hsl(var(--color-muted-foreground))] mb-4">
          Premium Member
        </p>
        <div className="w-full space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-[hsl(var(--color-muted-foreground))]">
              Active Jobs
            </span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[hsl(var(--color-muted-foreground))]">
              Total Applicants
            </span>
            <span className="font-medium">156</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[hsl(var(--color-muted-foreground))]">
              Member Since
            </span>
            <span className="font-medium">Jan 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfoCard;
