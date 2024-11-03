import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";

const MarsVisitForm = () => {
  const [stage, setStage] = useState(1);
  const methods = useForm();

  const nextStage = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStage((prev) => prev + 1);
    }
  };

  const prevStage = () => setStage((prev) => prev - 1);

  const onSubmit = (data) => {
    alert("Application submitted successfully! You have been emailed a confirmation for your submission.");
    methods.reset();
    setStage(1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {stage === 1 && <Stage1 />}
        {stage === 2 && <Stage2 />}
        {stage === 3 && <Stage3 />}

        <div className="button-container">
          {stage > 1 && <button type="button" onClick={prevStage}>Back</button>}
          {stage < 3 && <button type="button" onClick={nextStage}>Next</button>}
          {stage === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default MarsVisitForm;
