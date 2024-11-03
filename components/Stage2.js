import { useFormContext } from "react-hook-form";

const Stage2 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Travel Preferences</h2>

      <label htmlFor="departureDate">Departure Date</label>
      <input {...register("departureDate", { required: "Departure Date is required" })} type="date" placeholder="Departure Date" />
      <p>{errors.departureDate?.message}</p>

      <label htmlFor="returnDate">Return Date</label>
      <input {...register("returnDate", { required: "Return Date is required" })} type="date" placeholder="Return Date" />
      <p>{errors.returnDate?.message}</p>

      <label htmlFor="accommodation">Accommodation Preference</label>
      <select {...register("accommodation", { required: "Accommodation preference is required" })}>
        <option value="">Choose accommodation</option>
        <option value="spaceHotel">Space Hotel</option>
        <option value="martianBase">Martian Base</option>
      </select>
      <p>{errors.accommodation?.message}</p>

      <label htmlFor="specialRequests">Special Requests or Preferences</label>
      <textarea {...register("specialRequests")} placeholder="Special Requests or Preferences"></textarea>
    </div>
  );
};

export default Stage2;
