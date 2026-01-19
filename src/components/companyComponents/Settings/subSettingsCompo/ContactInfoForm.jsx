const ContactInfoForm = ({ register, errors, companyData }) => {
  const companyInfo = companyData?.data;
  return (
    <div id="contact" className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label mb-2" htmlFor="phone">
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            className="input"
            defaultValue={companyInfo?.phone || ""}
            placeholder="+1 (555) 000-0000"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="label mb-2" htmlFor="hrEmail">
            HR Department Email
          </label>
          <input
            type="email"
            id="hrEmail"
            className="input"
            defaultValue={companyInfo?.hrEmail || ""}
            placeholder="hr@example.com"
            {...register("hrEmail")}
          />
        </div>
        <div>
          <label className="label mb-2" htmlFor="infoEmail">
            Information Email
          </label>
          <input
            type="email"
            id="infoEmail"
            className="input"
            defaultValue={companyInfo?.infoEmail || ""}
            placeholder="support@example.com"
            {...register("infoEmail")}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
