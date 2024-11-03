import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, formData } = req.body;

    try {
      // Set up Nodemailer transport
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "letsgonets03@gmail.com", // Replace with your Gmail address
          pass: process.env.EMAIL_PASSWORD,    // Replace with your generated App Password
        },
      });

      // Mapping keys to readable names
      const fieldNames = {
        fullName: "Full Name",
        dob: "Date of Birth",
        nationality: "Nationality",
        email: "Email",
        phone: "Phone",
        departureDate: "Departure Date",
        returnDate: "Return Date",
        accommodation: "Accommodation",
        specialRequests: "Special Requests",
        healthDeclaration: "Health Declaration",
        emergencyContactName: "Emergency Contact Name",
        emergencyContactPhone: "Emergency Contact Phone Number",
        medicalConditions: "Medical Conditions",
      };

      // Format email content with readable names
      const formattedData = Object.entries(formData)
        .map(([key, value]) => `${fieldNames[key] || key}: ${value}`)
        .join('\n');

      // Alien-themed greeting and personalized message
      const firstSentence = `Hi ${formData.fullName},\n\nThank you for transmitting your interest in a visit to Planet Mars! The Galactic Council and Mr. Elon Musk will review your application carefully, and we will contact you soon with an intergalactic decision.\n\nHere’s a summary of your Martian visa application (in Earthling format, of course):`;

      // Compose email with extraterrestrial flair
      const mailOptions = {
        from: "letsgonets03@gmail.com", // Replace with your Gmail address
        to: email,
        subject: "Confirmation of Your Mars Visit Application",
        text: `${firstSentence}\n\n${formattedData}\n\nP.S. If you encounter any aliens, remember to greet them with the universal signal: 🖖\n\nBest stardust wishes,\nMars Recruiting Team`,
      };

      // Send email
      const result = await transport.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent", result });
    } catch (error) {
      console.error("Error in sending email:", error);
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
