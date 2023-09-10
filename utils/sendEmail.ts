import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FormData } from "@/types";

export const sendEmail = ({
  firstName,
  lastName,
  companyName,
  email,
  phoneNumber,
  message,
}: FormData) => {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY!;

  const emailTemplate = {
    from_name: email,
    company: companyName,
    message: `
    Hi my name is ${firstName} ${lastName}.\n
    My Company name is ${companyName}.\n
    My contacts: ${phoneNumber}.
    Message: ${message}
  `,
  };
  const emailjsData = emailjs
    .send(serviceID, templateID, emailTemplate, serviceKey)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );

  toast.promise(emailjsData, {
    loading: "Sending...",
    success: "Your message sent",
    error: "Faield to sent",
  });
};
