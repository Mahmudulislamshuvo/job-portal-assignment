import { useGetComanyProfileQuery } from "../../../features/api/apiSlice";
import SocialLinks from "../../userComponents/home/UserProfile/profile/SocialLinks";
import AboutCompany from "./profileSubCompo/AboutCompany";
import ComapnyLogo from "./profileSubCompo/ComapnyLogo";
import CompanyCultureAndValues from "./profileSubCompo/CompanyCultureAndValues";
import CompanyInfo from "./profileSubCompo/CompanyInfo";
import ContactInfo from "./profileSubCompo/ContactInfo";
import OpenPositions from "./profileSubCompo/OpenPositions";

const CompanyProfle = () => {
  const { data, isLoading, error } = useGetComanyProfileQuery();

  // data: {
  //       id: '444cb47d-ddcf-487c-a869-4213afce9455',
  //       name: 'Vaughan and Mckee Associates',
  //       slug: 'vaughan-and-mckee-associates',
  //       email: 'company@mailinator.com',
  //       role: 'COMPANY',
  //       industry: 'manufacturing',
  //       description:
  //         'Quis veritatis rerum Quis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerumQuis veritatis rerum',
  //       location: 'Consectetur irure i',
  //       city: null,
  //       state: null,
  //       country: null,
  //       phone: null,
  //       socialLinks: null,
  //       websiteUrl: 'https://www.bynire.org',
  //       hrEmail: null,
  //       infoEmail: null,
  //       logoUrl: null,
  //       employeeCount: '51-200',
  //       foundedYear: 1975,
  //       createdAt: '2026-01-16T11:19:39.320Z',
  //       updatedAt: '2026-01-16T11:19:39.320Z'
  //     }

  return (
    <>
      <main class="container mx-auto px-4 py-8">
        {/* <!-- Company Header --> */}
        <div class="card p-8 mb-8">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            {/* <!-- Company Logo --> */}
            <ComapnyLogo data={data?.data} />
            {/* <!-- Company Info --> */}
            <CompanyInfo data={data?.data} />
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
