import { useFormContext } from "react-hook-form";

const Stage3 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Health and Safety</h2>

      <label htmlFor="healthDeclaration">Health Declaration</label>
      <select {...register("healthDeclaration", { required: "Health declaration is required" })}>
        <option value="">Choose an Option</option>
        <option value="Good">Yes</option>
        <option value="Good">No</option>

      </select>
      <p>{errors.healthDeclaration?.message}</p>

      <label htmlFor="emergencyContactName">Emergency Contact Full Name</label>
      <input
        type="text"
        {...register("emergencyContactName", { required: "Emergency contact name is required" })}
        placeholder="Full Name"
      />
      <p>{errors.emergencyContactName?.message}</p>

      <label htmlFor="emergencyContactPhone">Emergency Contact Phone Number</label>
      <input
        type="tel"
        {...register("emergencyContactPhone", {
          required: "Emergency contact phone number is required",
          pattern: {
            value: /^\d{3}-\d{3}-\d{4}$/,
            message: "Invalid phone number format"
          }
        })}
        placeholder="Phone Number"
      />
      <p>{errors.emergencyContactPhone?.message}</p>

      <label htmlFor="medicalConditions">Medical Conditions</label>
      <select {...register("medicalConditions", { required: "Medical condition selection is required" })}>
        <option value="">Select if any medical condition</option>
        <option value="None">None</option>
        <option value="Asthma">Asthma</option>
        <option value="Diabetes">Diabetes</option>
        <option value="Heart Condition">Heart Condition</option>
        <option value="Seizures">Seizures</option>
        <option value="Allergies">Allergies</option>
        <option value="Other">Other</option>
      </select>
      <p>{errors.medicalConditions?.message}</p>
    </div>
  );
};

export default Stage3;
