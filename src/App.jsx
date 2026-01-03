import Footer from "./components/Footer";
import Login from "./components/login/Login";
import NavbarPublic from "./components/public/NavbarPublic";

const App = () => {
  return (
    <div>
      <NavbarPublic />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
