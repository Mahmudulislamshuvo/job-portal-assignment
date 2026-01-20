import { useGetComanyProfileQuery } from "../../../features/api/apiSlice";
import CompanyProfileSkeleton from "../../skelitons/CompanyProfileSkeliton";
import SocialLinks from "../../userComponents/home/UserProfile/profile/SocialLinks";
import AboutCompany from "./profileSubCompo/AboutCompany";
import ComapnyLogo from "./profileSubCompo/ComapnyLogo";
import CompanyCultureAndValues from "./profileSubCompo/CompanyCultureAndValues";
import CompanyInfo from "./profileSubCompo/CompanyInfo";
import ContactInfo from "./profileSubCompo/ContactInfo";
import OpenPositions from "./profileSubCompo/OpenPositions";

const CompanyProfle = () => {
  const { data, isLoading } = useGetComanyProfileQuery();

  if (isLoading) {
    return <CompanyProfileSkeleton />;
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* <!-- Company Header --> */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* <!-- Company Logo --> */}
            <ComapnyLogo data={data?.data} />
            {/* <!-- Company Info --> */}
            <CompanyInfo data={data?.data} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Main Content Column --> */}
          <div className="lg:col-span-2 space-y-6">
            {/* <!-- About Company --> */}
            <AboutCompany data={data?.data} />

            {/* <!-- Company Culture & Values --> */}
            {/* TODO: No data added in this component  */}
            <CompanyCultureAndValues data={data?.data} />

            {/* <!-- Open Positions --> */}
            <OpenPositions />
          </div>

          {/* <!-- Sidebar Column --> */}
          <div className="lg:col-span-1 space-y-6">
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
