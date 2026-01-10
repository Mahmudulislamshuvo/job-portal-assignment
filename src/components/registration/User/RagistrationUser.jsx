import AdditionalInfo from "../Shared/AdditionalInfo";
import FeatureHighlight from "../Shared/FeatureHighlight";
import FormUser from "./FormUser";
import TitleRegistration from "../Shared/TitleRegistration";
import UserAccountTypeBtn from "./UserAccountTypeBtn";

const RagistrationUser = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* <!-- Page Title --> */}
          <TitleRegistration
            title="Create Your Account"
            des="Join thousands of professionals finding their dream jobs"
          />
          {/* <!-- Account Type Toggle --> */}
          <UserAccountTypeBtn />

          {/* <!-- Registration Card --> */}
          <FormUser />

          {/* <!-- Feature Highlights --> */}
          <FeatureHighlight />

          {/* <!-- Additional Information --> */}
          <AdditionalInfo />
        </div>
      </main>
    </>
  );
};

export default RagistrationUser;
