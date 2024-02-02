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
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    planType: "",
    planDuration: "",
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });
  return (
    <div className=" w-full h-full flex justify-between flex-col items-center  relative bg-[#EEF5FF]">
      <Steper step={step} setStep={setStep} />
      {step === 1 && <FirstForm setFormData={setFormData} />}
      {step === 2 && <SecondForm setFormData={setFormData} />}
      {step === 3 && <ThirdForm setFormData={setFormData} />}
      {step === 4 && <ForthForm setFormData={setFormData} />}

      <Footer step={step} setStep={setStep} />
    </div>
  );
}

export default MultiStepForm;
