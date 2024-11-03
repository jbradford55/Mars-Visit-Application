// __tests__/validation.test.js
import { validateForm } from '../validation';

describe("Form Validation", () => {
  test("should return an error if fullName is missing", () => {
    const result = validateForm({ email: "test@example.com", phone: "123-456-7890", departureDate: "2023-01-01", returnDate: "2023-02-01" });
    expect(result.fullName).toBe("Full Name is required");
  });

  test("should return an error if email is invalid", () => {
    const result = validateForm({ fullName: "John Doe", email: "invalid-email", phone: "123-456-7890", departureDate: "2023-01-01", returnDate: "2023-02-01" });
    expect(result.email).toBe("Invalid email format");
  });

  test("should return an error if phone number format is invalid", () => {
    const result = validateForm({ fullName: "John Doe", email: "test@example.com", phone: "123", departureDate: "2023-01-01", returnDate: "2023-02-01" });
    expect(result.phone).toBe("Invalid phone number format");
  });

  test("should return an error if departureDate is missing", () => {
    const result = validateForm({ fullName: "John Doe", email: "test@example.com", phone: "123-456-7890", returnDate: "2023-02-01" });
    expect(result.departureDate).toBe("Departure Date is required");
  });

  test("should return an error if returnDate is missing", () => {
    const result = validateForm({ fullName: "John Doe", email: "test@example.com", phone: "123-456-7890", departureDate: "2023-01-01" });
    expect(result.returnDate).toBe("Return Date is required");
  });

  test("should return no errors if all fields are valid", () => {
    const result = validateForm({
      fullName: "John Doe",
      email: "test@example.com",
      phone: "123-456-7890",
      departureDate: "2023-01-01",
      returnDate: "2023-02-01"
    });
    expect(result).toEqual({});
  });
});
