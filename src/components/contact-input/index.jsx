import { useCallback } from "react";

const ContactInput = ({
  Icon = null,
  placeholder = "",
  value = "",
  setValue = () => {},
  className,
  type = "text",
  multiline = false,
  rows = 1,
}) => {
  const changeInputValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return multiline ? (
    <div className={`flex items-start bg-white rounded-md p-2 gap-2 ${className}`}>
      {Icon && <Icon className={"text-lightBlue"} size={"25px"} />}
      <textarea
      rows={rows}
        className="w-full bg-transparent outline-none border-none text-lg resize-none"
        value={value}
        onChange={changeInputValue}
        placeholder={placeholder}
      />
    </div>
  ) : (
    <div className={`flex items-center bg-white rounded-md p-2 gap-2 ${className}`}>
      {Icon && <Icon className={"text-lightBlue"} size={"25px"} />}
      <input
        className="w-full bg-transparent outline-none border-none text-lg"
        value={value}
        onChange={changeInputValue}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default ContactInput;
