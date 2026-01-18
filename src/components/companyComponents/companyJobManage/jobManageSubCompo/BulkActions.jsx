import { PauseCircle, PlayCircle, Trash2 } from "lucide-react";

const BulkActions = () => {
  return (
    <div
      className="hidden p-4 bg-accent border-t border-border"
      id="bulkActionsBar"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">
          <span id="selectedCount">0</span> jobs selected
        </span>
        <div className="flex items-center gap-2">
          <button className="btn btn-outline text-sm h-9">
            <PauseCircle className="h-3 w-3 mr-2" />
            Deactivate
          </button>
          <button className="btn btn-outline text-sm h-9">
            <PlayCircle className="h-3 w-3 mr-2" />
            Activate
          </button>
          <button className="btn btn-outline text-sm h-9 text-red-600">
            <Trash2 className="h-3 w-3 mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkActions;
