type InputFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function InputField({ label, id, ...rest }: InputFieldProps) {
  const handlePlaceHolder = () => {
    switch (label) {
      case "Name":
        return "John Doe";
      case "Email Addess":
        return "Johndoe@gmail.com";
      case "Phone Number":
        return "123-456-7890";
      default:
        return "John Doe";
    }
  };
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor={id} className=" text-[#44566C]">
        {label}
      </label>
      <input
        type={rest.type}
        id={id}
        {...rest}
        className=" border-solid border-[#A2A3A8] border-[1px] px-4 py-2 rounded focus:outline-none focus:border-[#0A264C]  transition-all duration-300 ease-in-out"
        placeholder={handlePlaceHolder()}
      />
    </div>
  );
}

export default InputField;
