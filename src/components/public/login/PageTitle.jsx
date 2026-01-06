import { FaUserAlt } from "react-icons/fa";

const PageTitle = () => {
  return (
    <>
      {/* <!-- Page Title --> */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <FaUserAlt className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-3">Welcome Back</h1>
        <p className="text-lg text-muted-foreground">
          Sign in to access your account
        </p>
      </div>
    </>
  );
};

export default PageTitle;
