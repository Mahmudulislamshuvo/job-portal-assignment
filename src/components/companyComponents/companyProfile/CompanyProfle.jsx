import SocialLinks from "../../userComponents/home/UserProfile/profile/SocialLinks";
import AboutCompany from "./profileSubCompo/AboutCompany";
import ComapnyLogo from "./profileSubCompo/ComapnyLogo";
import CompanyCultureAndValues from "./profileSubCompo/CompanyCultureAndValues";
import CompanyInfo from "./profileSubCompo/CompanyInfo";
import ContactInfo from "./profileSubCompo/ContactInfo";
import OpenPositions from "./profileSubCompo/OpenPositions";

const CompanyProfle = () => {
  return (
    <>
      <main class="container mx-auto px-4 py-8">
        {/* <!-- Company Header --> */}
        <div class="card p-8 mb-8">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            {/* <!-- Company Logo --> */}
            <ComapnyLogo />
            {/* <!-- Company Info --> */}
            <CompanyInfo />
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Main Content Column --> */}
          <div class="lg:col-span-2 space-y-6">
            {/* <!-- About Company --> */}
            <AboutCompany />

            {/* <!-- Company Culture & Values --> */}
            <CompanyCultureAndValues />

            {/* <!-- Open Positions --> */}
            <OpenPositions />
          </div>

          {/* <!-- Sidebar Column --> */}
          <div class="lg:col-span-1 space-y-6">
            {/* <!-- Contact Information --> */}
            <ContactInfo />

            {/* <!-- Social Media --> */}
            <SocialLinks data={""} title="Follow Us" />
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyProfle;
