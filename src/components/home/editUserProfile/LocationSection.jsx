import CustomInput from "../../commonComponents/CustomInput";

const LocationSection = ({ register, errors, data }) => {
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
            defaultValue={data?.location?.city}
            {...register("location.city", { required: "City is required" })}
          />
          {errors.location?.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.city.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="state" className="label block mb-2">
            State/Province *
          </label>
          <CustomInput
            type="text"
            id="state"
            placeholder="Enter state"
            defaultValue={data?.location?.state}
            {...register("location.state", {
              required: "State/Province is required",
            })}
          />
          {errors.location?.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.state.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="country" className="label block mb-2">
            Country *
          </label>
          <CustomInput
            type="text"
            id="country"
            placeholder="Enter country"
            defaultValue={data?.location?.country}
            {...register("location.country", {
              required: "Country is required",
            })}
          />
          {errors.location?.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.country.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="zipcode" className="label block mb-2">
            Zip Code
          </label>
          <CustomInput
            type="text"
            id="zipcode"
            placeholder="Enter zip code"
            defaultValue={data?.location?.zipcode}
            {...register("location.zipcode")}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
