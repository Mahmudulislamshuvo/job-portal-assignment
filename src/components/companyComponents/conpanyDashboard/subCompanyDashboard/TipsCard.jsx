import { Lightbulb } from "lucide-react";

const TipsCard = () => {
  return (
    <>
      <div className="card p-6 bg-blue-50 border-blue-200">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-blue-900">Pro Tip</h4>
            <p className="text-sm text-blue-800">
              Jobs with detailed descriptions get 40% more quality applicants.
              Keep your postings updated!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsCard;
