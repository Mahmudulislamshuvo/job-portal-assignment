import CustomInput from "../../../commonComponents/CustomInput";

const LocationSection = ({ register, data }) => {
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
            defaultValue={data?.city}
            {...register("city")}
          />
          {/* {errors.location?.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.city.message}
            </p>
          )} */}
        </div>
        <div>
          <label htmlFor="state" className="label block mb-2">
            State/Province *
          </label>
          <CustomInput
            type="text"
            id="state"
            placeholder="Enter state"
            defaultValue={data?.state}
            {...register("state")}
          />
          {/* {errors.location?.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.state.message}
            </p>
          )} */}
        </div>
        <div>
          <label htmlFor="country" className="label block mb-2">
            Country *
          </label>
          <CustomInput
            type="text"
            id="country"
            placeholder="Enter country"
            defaultValue={data?.country}
            {...register("country")}
          />
          {/* {errors.location?.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.country.message}
            </p>
          )} */}
        </div>
        <div>
          <label htmlFor="zipCode" className="label block mb-2">
            Zip Code
          </label>
          <CustomInput
            type="text"
            id="zipCode"
            placeholder="Enter zip code"
            defaultValue={data?.location?.zipcode}
            {...register("zipCode")}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
