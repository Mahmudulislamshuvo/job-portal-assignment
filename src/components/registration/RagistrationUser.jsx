import AccoutTypeButtons from "./AccoutTypeButtons";
import AdditionalInfo from "./AdditionalInfo";
import FeatureHighlight from "./FeatureHighlight";
import FormUser from "./FormUser";
import TitleRegistration from "./TitleRegistration";

const RagistrationUser = () => {
  return (
    <>
      <main class="container mx-auto px-4 py-8">
        <div class="max-w-2xl mx-auto">
          {/* <!-- Page Title --> */}
          <TitleRegistration
            title="Create Your Account"
            des="Join thousands of professionals finding their dream jobs"
          />
          {/* <!-- Account Type Toggle --> */}
          <AccoutTypeButtons />

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
