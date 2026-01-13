import { Calendar, Edit, MapPin } from "lucide-react";
import { getFormatMonthYear } from "../../../utils/getFormatMonthYear";

const ProfileInfo = ({ userData }) => {
  // console.log(userData?.data);

  return (
    <>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {userData?.data?.name || "John Doe"}
            </h1>
            {userData?.data?.title && (
              <p className="text-lg text-foreground mb-2">
                {userData?.data?.title}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground">
              {userData?.data?.location && (
                <>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {userData?.data?.location}
                  </span>
                  <span>•</span>
                </>
              )}

              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {getFormatMonthYear(userData?.data?.createdAt) ||
                  "Joined Jan 2023"}
              </span>
            </div>
          </div>
          <a href="edit-user-profile.html" className="btn btn-primary">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </a>
        </div>
        {/* nned to make them  */}
        {/* <!-- Quick Stats --> */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[hsl(var(--color-border))]">
          <div>
            <p className="text-2xl font-bold text-[hsl(var(--color-primary))]">
              12
            </p>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Applications
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[hsl(var(--color-primary))]">
              5
            </p>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              In Review
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[hsl(var(--color-primary))]">
              18
            </p>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              Saved Jobs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
