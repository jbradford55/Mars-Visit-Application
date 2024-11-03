import { useFormContext } from "react-hook-form";

const Stage1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Personal Information</h2>

      <label htmlFor="fullName">Full Name</label>
      <input 
        type="text"
        {...register("fullName", { required: "Full Name is required" })} 
        placeholder="Full Name" 
      />
      <p className="error">{errors.fullName?.message}</p>

      <label htmlFor="dob">Date of Birth</label>
      <input 
        type="date"
        {...register("dob", { required: "Date of Birth is required" })} 
        placeholder="Date of Birth" 
      />
      <p className="error">{errors.dob?.message}</p>

      <label htmlFor="nationality">Nationality</label>
      <input 
        type="text"
        {...register("nationality", { required: "Nationality is required" })}
        placeholder="Enter your nationality"
      />
      <p className="error">{errors.nationality?.message}</p>

      <label htmlFor="email">Email</label>
      <input 
        type="email"
        {...register("email", { 
          required: "Email is required", 
          pattern: { 
            value: /^\S+@\S+\.\S+$/, 
            message: "Invalid email format" 
          } 
        })} 
        placeholder="Email" 
      />
      <p className="error">{errors.email?.message}</p>

      <label htmlFor="phone">Phone</label>
      <input 
        type="tel"
        {...register("phone", { 
          required: "Phone is required", 
          pattern: { 
            value: /^\d{3}-\d{3}-\d{4}$/, 
            message: "Format must be 000-000-0000" 
          } 
        })} 
        placeholder="Phone Number" 
      />
      <p className="error">{errors.phone?.message}</p>
    </div>
  );
};

export default Stage1;
