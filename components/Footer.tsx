import React from "react";

type FooterProps = {
  step: number;
  setStep: (step: number) => void;
};
function Footer({ step, setStep }: FooterProps) {
  return (
    <>
      {step === 5 ? null : (
        <div
          className={` bg-white w-full  flex items-center p-4 ${
            step === 1 ? "justify-end" : " justify-between"
          }`}
        >
          {step !== 1 && (
            <button
              className=" text-[#A2A3A8] text-sm font-base text-center"
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              Go Back
            </button>
          )}
          <button
            className=" px-4 py-2 bg-[#032859] text-white text-sm font-base text-center rounded"
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          >
            {step === 4 ? "Finish" : "Next Step"}
          </button>
        </div>
      )}
    </>
  );
}

export default Footer;
