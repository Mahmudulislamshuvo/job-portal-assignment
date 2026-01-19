import { Building2, Camera, Upload } from "lucide-react";
import {
  useGetCompanyProfileQuery,
  useUploadCompanyProfilePicMutation,
} from "../../../../features/api/apiSlice";
import LoadingSpinner from "../../../commonComponents/LoadingSpinner";

const CompanyInfoForm = () => {
  //
  const { data: companyData, isLoading: isCompanyLoading } =
    useGetCompanyProfileQuery();
  const [uploadProfilePic, { isLoading: isUploading }] =
    useUploadCompanyProfilePicMutation();

  const uploadCompanyProfilePic = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("logo", file);
    // Handle file upload logic here
    const response = await uploadProfilePic(formData);

    if (response?.data?.success === true) {
      console.log("Logo uploaded successfully");
    }
  };

  const companyInfo = companyData?.data;

  if (isCompanyLoading) {
    return (
      <div className="flex items-center justify-center h-48">Loading...</div>
    );
  }

  return (
    <div id="company-info" className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Company Information</h2>

      {/* <!-- Logo Upload --> */}
      <div className="mb-6">
        <label className="label mb-2">Company Logo</label>
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              {companyInfo?.logoUrl ? (
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}${companyInfo?.logoUrl}`}
                  alt="Company Logo"
                />
              ) : (
                <Building2 className="h-12 w-12 text-white" />
              )}
            </div>
            <button className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1">
            <input
              type="file"
              id="logoUpload"
              className="hidden"
              accept="image/*"
              onChange={uploadCompanyProfilePic}
            />
            <label
              htmlFor="logoUpload"
              className="btn btn-outline cursor-pointer"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? <LoadingSpinner /> : "Upload Logo"}
            </label>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">
              Recommended size: 200x200px. Max file size: 2MB. Supported
              formats: JPG, PNG, SVG
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Company Name --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label mb-2" htmlFor="companyName">
            Company Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            className="input"
            defaultValue={companyInfo?.name || ""}
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <label className="label mb-2" htmlFor="industry">
            Industry
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="industry"
            className="input"
            defaultValue={companyInfo?.industry || ""}
            placeholder="e.g., Technology, Healthcare"
            required
          />
        </div>
      </div>

      {/* <!-- Company Size and Type --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label mb-2" htmlFor="companySize">
            Company Size
          </label>
          <select
            id="companySize"
            className="input"
            defaultValue={companyInfo?.employeeCount}
          >
            <option value="">Select company size</option>
            <option value="1,10">1-10 employees</option>
            <option value="11,50">11-50 employees</option>
            <option value="51,200">51-200 employees</option>
            <option value="201,500">201-500 employees</option>
            <option value="501,1000">501-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
        <div>
          <label className="label mb-2" htmlFor="companyType">
            Company Type
          </label>
          <select id="companyType" className="input" defaultValue="private">
            <option value="">Select company type</option>
            <option value="startup">Startup</option>
            <option value="private">Private Company</option>
            <option value="public">Public Company</option>
            <option value="non-profit">Non-Profit</option>
            <option value="government">Government Agency</option>
            <option value="educational">Educational Institution</option>
            <option value="self-employed">Self-Employed</option>
            <option value="partnership">Partnership</option>
          </select>
        </div>
      </div>

      {/* <!-- Website and Founded Year --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label mb-2" htmlFor="website">
            Website
            <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="website"
            className="input"
            defaultValue="https://techcorp.example.com"
            placeholder="https://yourcompany.com"
            required
          />
        </div>
        <div>
          <label className="label mb-2" htmlFor="founded">
            Founded Year
          </label>
          <input
            type="text"
            id="founded"
            className="input"
            defaultValue="2015"
            placeholder="e.g., 2020"
          />
        </div>
      </div>

      {/* <!-- About Company --> */}
      <div className="mb-4">
        <label className="label mb-2" htmlFor="about">
          About Company
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="about"
          className="textarea"
          rows="6"
          required
          placeholder="Tell us about your company..."
          defaultValue="TechCorp Solutions is a leading technology company specializing in innovative software solutions. We are committed to delivering cutting-edge products and services that help businesses transform digitally. Our team of experienced professionals works on challenging projects across various domains including cloud computing, AI/ML, and mobile applications. We pride ourselves on fostering a culture of innovation, collaboration, and continuous learning. Join us to be part of a dynamic team that's shaping the future of technology."
        ></textarea>
      </div>

      {/* <!-- Headquarters Location --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="label mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            className="input"
            defaultValue="San Francisco"
            placeholder="City"
          />
        </div>
        <div>
          <label className="label mb-2" htmlFor="state">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            className="input"
            defaultValue="California"
            placeholder="State"
          />
        </div>
        <div>
          <label className="label mb-2" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            id="country"
            className="input"
            defaultValue="United States"
            placeholder="Country"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoForm;
