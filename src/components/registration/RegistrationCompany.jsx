import BenefitsEmployee from "./BenefitsEmployee";
import FormComany from "./FormComany";
import AccoutTypeButtons from "./AccoutTypeButtons";
import TitleRegistration from "./TitleRegistration";

const RegistrationCompany = () => {
  return (
    <>
      <main class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto">
          <TitleRegistration
            title="Register Your Company"
            des="Join leading companies in finding top talent"
          />

          <AccoutTypeButtons />

          <FormComany />

          <BenefitsEmployee />
        </div>
      </main>
    </>
  );
};

export default RegistrationCompany;
