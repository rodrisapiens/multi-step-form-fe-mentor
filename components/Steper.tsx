type SteperProps = {
  step: number;
  setStep: (step: number) => void;
};

function Steper({ step, setStep }: SteperProps) {
  return (
    <div
      className=" bg-no-repeat w-full flex h-[172px] justify-center bg-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-sidebar-mobile.svg)`,
      }}
    >
      <div className=" h-fit w-fit flex gap-4 mt-6">
        <button
          className={` text-white border-solid border-[1px] border-white ${
            step === 1
              ? "bg-[#BDE0FF] text-[#0A264C]"
              : "bg-transparent text-white"
          } text-sm w-8 h-8 rounded-full flex items-center justify-center`}
          onClick={() => {
            setStep(1);
          }}
        >
          1
        </button>
        <button
          className={` text-white border-solid border-[1px] border-white ${
            step === 2
              ? "bg-[#BDE0FF] text-[#0A264C]"
              : "bg-transparent text-white"
          } text-sm w-8 h-8 rounded-full flex items-center justify-center`}
          onClick={() => {
            setStep(2);
          }}
        >
          2
        </button>
        <button
          className={` text-white border-solid border-[1px] border-white ${
            step === 3
              ? "bg-[#BDE0FF] text-[#0A264C]"
              : "bg-transparent text-white"
          } text-sm w-8 h-8 rounded-full flex items-center justify-center`}
          onClick={() => {
            setStep(3);
          }}
        >
          3
        </button>
        <button
          className={` text-white border-solid border-[1px] border-white ${
            step === 4 || step === 5
              ? "bg-[#BDE0FF] text-[#0A264C]"
              : "bg-transparent text-white"
          } text-sm w-8 h-8 rounded-full flex items-center justify-center`}
          onClick={() => {
            setStep(4);
          }}
        >
          4
        </button>
      </div>
    </div>
  );
}

export default Steper;
