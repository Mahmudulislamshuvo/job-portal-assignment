const ApplicantsImage = ({ applicant }) => {
  return (
    <>
      <div className="shrink-0">
        {applicant?.user?.profilePictureUrl ? (
          <img
            src={applicant.user.profilePictureUrl}
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
            {applicant?.user?.name
              ? applicant.user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 3)
              : "NA"}
          </div>
        )}
      </div>
    </>
  );
};

export default ApplicantsImage;
