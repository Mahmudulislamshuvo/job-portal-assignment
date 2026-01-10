import BenefitsEmployee from "./BenefitsEmployee";
import FormComany from "./FormComany";
import TitleRegistration from "../Shared/TitleRegistration";
import CompanyAccountTypeBtn from "./CompanyAccountTypeBtn";

const RegistrationCompany = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <TitleRegistration
            title="Register Your Company"
            des="Join leading companies in finding top talent"
          />

          <CompanyAccountTypeBtn />

          <FormComany />

          <BenefitsEmployee />
        </div>
      </main>
    </>
  );
};

export default RegistrationCompany;
