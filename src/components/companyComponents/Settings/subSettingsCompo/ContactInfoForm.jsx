const ContactInfoForm = () => {
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
            defaultValue="+1 (555) 123-4567"
            placeholder="+1 (555) 000-0000"
            required
          />
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
            defaultValue="hr@techcorp.com"
            placeholder="hr@example.com"
          />
        </div>
        <div>
          <label className="label mb-2" htmlFor="supportEmail">
            Information Email
          </label>
          <input
            type="email"
            id="supportEmail"
            className="input"
            defaultValue="support@techcorp.com"
            placeholder="support@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
