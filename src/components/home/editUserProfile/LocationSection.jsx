import CustomInput from "../../commonComponents/CustomInput";

const LocationSection = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Location</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="label block mb-2">
            City *
          </label>
          <CustomInput
            type="text"
            id="city"
            placeholder="Enter city"
            defaultValue="San Francisco"
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="label block mb-2">
            State/Province *
          </label>
          <CustomInput
            type="text"
            id="state"
            placeholder="Enter state"
            defaultValue="California"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="label block mb-2">
            Country *
          </label>
          <CustomInput
            type="text"
            id="country"
            placeholder="Enter country"
            defaultValue="United States"
            required
          />
        </div>
        <div>
          <label htmlFor="zipcode" className="label block mb-2">
            Zip Code
          </label>
          <CustomInput
            type="text"
            id="zipcode"
            placeholder="Enter zip code"
            defaultValue="94102"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
