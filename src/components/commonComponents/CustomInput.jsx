const CustomInput = ({ css, ...props }) => {
  const defaultClass = "input";
  const combinedClass = [defaultClass, css].filter(Boolean).join(" ");

  return <input className={combinedClass} {...props} />;
};

export default CustomInput;
