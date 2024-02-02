import InputField from "./InputField";

type FirtFormProps = {
  setFormData: (data: any) => void;
};

function FirstForm({ setFormData }: FirtFormProps) {
  return (
    <div className=" px-6 py-8 absolute top-[12%] bg-white mx-4 rounded-lg text-xs flex flex-col gap-4">
      <p className=" text-[#0A264C] font-bold text-2xl ">Personal Info</p>
      <p className=" text-[#A2A3A8] text-base">
        Please provide your name, email address and, phone numer.
      </p>
      <form className=" flex flex-col gap-4">
        <InputField label="Name" id="name" name="name" />
        <InputField label="Email Addess" id="email" name="email" />
        <InputField label="Phone Number" id="phone" name="phone" />
      </form>
    </div>
  );
}

export default FirstForm;
