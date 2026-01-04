import LoginCard from "./LoginCard";
import PageTitle from "./PageTitle";
import SecurityNote from "./SecurityNote";

const Login = () => {
  return (
    <>
      <main class="container mx-auto px-4 py-8">
        <div class="max-w-md mx-auto">
          {/* <!-- Page Title --> */}
          <PageTitle />

          {/* <!-- Login Card --> */}
          <LoginCard />

          {/* <!-- Security Note --> */}
          <SecurityNote />
        </div>
      </main>
    </>
  );
};

export default Login;
