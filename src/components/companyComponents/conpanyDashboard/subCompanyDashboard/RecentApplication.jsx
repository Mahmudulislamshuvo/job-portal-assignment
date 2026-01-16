import { Check, Download, Eye, User } from "lucide-react";
import React from "react";

const RecentApplication = () => {
  return (
    <>
      <div className="p-6 hover:bg-[hsl(var(--color-accent))] transition-colors">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
            <User className="h-6 w-6 text-[hsl(var(--color-primary))]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  Applied for
                  <span className="font-medium text-[hsl(var(--color-foreground))]">
                    Senior Full Stack Developer
                  </span>
                </p>
              </div>
              <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                2 hours ago
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="badge badge-secondary">React</span>
              <span className="badge badge-secondary">Node.js</span>
              <span className="badge badge-secondary">AWS</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-primary text-xs h-8">
                <Check className="h-3 w-3 mr-1" />
                Shortlist
              </button>
              <button className="btn btn-outline text-xs h-8">
                <Eye className="h-3 w-3 mr-1" />
                View Profile
              </button>
              <button className="btn btn-outline text-xs h-8">
                <Download className="h-3 w-3 mr-1" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentApplication;
