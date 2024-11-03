import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router"; // Import useRouter
import Stage1 from "../components/Stage1";
import Stage2 from "../components/Stage2";
import Stage3 from "../components/Stage3";

const MarsVisitForm = () => {
  const [stage, setStage] = useState(1);
  const methods = useForm();
  const router = useRouter(); // Initialize the router

  const nextStage = () => setStage((prev) => prev + 1);
  const prevStage = () => setStage((prev) => prev - 1);

  const onSubmit = async (data) => {
    try {
      // Send data to the email handler API
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email, // Assuming the email is in `data.email`
          formData: data,    // Entire form data object
        }),
      });
  
      if (response.ok) {
        alert("Application submitted successfully! You have been emailed a confirmation for your submission");
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      alert("An error occurred. Please try again.");
    }
  
    methods.reset();
    setStage(1);
  };
  
  

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {stage === 1 && <Stage1 />}
        {stage === 2 && <Stage2 />}
        {stage === 3 && <Stage3 />}

        <div>
          {stage > 1 && <button type="button" onClick={prevStage}>Back</button>}
          {stage < 3 && <button type="button" onClick={nextStage}>Next</button>}
          {stage === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default MarsVisitForm;
