import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="p-4 border-t border-border">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to
          <span className="font-medium">6</span> of
          <span className="font-medium">24</span> jobs
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-outline h-9 px-3" disabled>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="btn btn-primary h-9 px-3">1</button>
          <button className="btn btn-outline h-9 px-3">2</button>
          <button className="btn btn-outline h-9 px-3">3</button>
          <button className="btn btn-outline h-9 px-3">4</button>
          <button className="btn btn-outline h-9 px-3">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
