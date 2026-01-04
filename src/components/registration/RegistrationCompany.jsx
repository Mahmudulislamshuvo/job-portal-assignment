import BenefitsEmployee from "./BenefitsEmployee";
import FormComany from "./FormComany";
import TitleRegistration from "./TitleRegistration";
import CompanyAccountTypeBtn from "./CompanyAccountTypeBtn";

const RegistrationCompany = () => {
  return (
    <>
      <main class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto">
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
