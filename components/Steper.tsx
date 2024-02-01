type SteperProps = {
  setStep: (step: number) => void;
};

function Steper({ setStep }: SteperProps) {
  return (
    <div
      className=" bg-no-repeat w-full flex h-[172px] justify-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-sidebar-mobile.svg)`,
      }}
    >
      <div className=" h-fit w-fit flex gap-2 mt-6">
        <button
          className=" text-white border-solid border-2 border-white bg-transparent w-6 h-6 rounded-full flex items-center justify-center"
          onClick={() => {
            setStep(1);
          }}
        >
          1
        </button>
        <button
          className=" text-white border-solid border-2 border-white bg-transparent w-6 h-6 rounded-full flex items-center justify-center"
          onClick={() => {
            setStep(2);
          }}
        >
          2
        </button>
        <button
          className=" text-white border-solid border-2 border-white bg-transparent w-6 h-6 rounded-full flex items-center justify-center"
          onClick={() => {
            setStep(3);
          }}
        >
          3
        </button>
        <button
          className=" text-white border-solid border-2 border-white bg-transparent w-6 h-6 rounded-full flex items-center justify-center"
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
