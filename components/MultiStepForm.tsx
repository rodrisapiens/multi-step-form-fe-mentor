"use client";

import { useState } from "react";

import Steper from "./Steper";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import ForthForm from "./ForthForm";
import Footer from "./Footer";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  return (
    <div className=" w-full h-full flex flex-col items-center  justify-start">
      <Steper setStep={setStep} />
      {step === 1 && <FirstForm />}
      {step === 2 && <SecondForm />}
      {step === 3 && <ThirdForm />}
      {step === 4 && <ForthForm />}
      <Footer step={step} setStep={setStep} />
    </div>
  );
}

export default MultiStepForm;
