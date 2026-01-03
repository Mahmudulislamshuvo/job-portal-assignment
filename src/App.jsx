import Footer from "./components/Footer";
import NavbarPublic from "./components/public/NavbarPublic";
import RagistrationUser from "./components/registration/RagistrationUser";
import RegistrationCompany from "./components/registration/RegistrationCompany";

const App = () => {
  return (
    <div>
      <NavbarPublic />
      {/* <RagistrationUser /> */}
      <RegistrationCompany />
      <Footer />
    </div>
  );
};

export default App;
