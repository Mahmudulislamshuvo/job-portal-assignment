import CompanyInfoForm from "./subSettingsCompo/CompanyInfoForm";
import ContactInfoForm from "./subSettingsCompo/ContactInfoForm";
import QuickInfoCard from "./subSettingsCompo/QuickInfoCard";
import SettingsActions from "./subSettingsCompo/SettingsActions";
import SettingsHeader from "./subSettingsCompo/SettingsHeader";
import SettingsNav from "./subSettingsCompo/SettingsNav";
import SocialMediaForm from "./subSettingsCompo/SocialMediaForm";

const Settings = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <SettingsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <SettingsNav />
            <QuickInfoCard />
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <CompanyInfoForm />
            <ContactInfoForm />
            <SocialMediaForm />
            <SettingsActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;