import CustomInput from "../../../commonComponents/CustomInput";

const BasicInformationSection = ({ register, errors, data }) => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NAME */}
        <div>
          <label htmlFor="name" className="label block mb-2">
            Name *
          </label>
          <CustomInput
            type="text"
            id="name"
            placeholder="Enter full name"
            defaultValue={data?.name}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="email" className="label block mb-2">
            Email Address *
          </label>
          <CustomInput
            type="email"
            id="email"
            placeholder="Enter email"
            value={data?.email}
            css={"bg-gray-300 cursor-not-allowed focus:ring-0"}
            // {...register("email", {
            //   required: "Email is required",
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: "Invalid email address",
            //   },
            // })}
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )} */}
        </div>

        {/* PHONE */}
        <div>
          <label htmlFor="phone" className="label block mb-2">
            Phone Number *
          </label>
          <CustomInput
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            defaultValue={data?.phone} // From backend
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* TITLE */}
        <div>
          <label htmlFor="title" className="label block mb-2">
            Professional Title
          </label>
          <CustomInput
            type="text"
            id="title"
            placeholder="e.g. Full Stack Developer"
            defaultValue={data?.title || ""}
            {...register("title")}
          />
          {/* Title is usually optional, so no required rule here */}
        </div>
      </div>
    </div>
  );
};

export default BasicInformationSection;
