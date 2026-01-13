import CustomInput from "../../commonComponents/CustomInput";

const BasicInformationSection = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label block mb-2">
            Name *
          </label>
          <CustomInput
            type="text"
            id="name"
            placeholder="Enter last name"
            defaultValue="Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="label block mb-2">
            Email Address *
          </label>
          <CustomInput
            type="email"
            id="email"
            placeholder="Enter email"
            defaultValue="john.doe@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="label block mb-2">
            Phone Number *
          </label>
          <CustomInput
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            defaultValue="+1 (415) 555-0123"
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="label block mb-2">
            Professional Title
          </label>
          <CustomInput
            type="text"
            id="title"
            placeholder="e.g. Full Stack Developer"
            defaultValue="Full Stack Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformationSection;
