"use client";
import PhoneInput from "react-phone-input-2";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import CustomField from "./CustomField";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  message: string;
};

const Contacts = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isLoading, isDirty, isValid },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phoneNumber: "",
      message: "Hi there, ",
    },
  });
  const onSubmit: SubmitHandler<FormData> = async (data, event) => {
    event?.preventDefault();

    const { firstName, lastName, companyName, email, phoneNumber, message } =
      data;

    try {
      const serviceID = process.env.SERVICE_ID!;
      const templateID = process.env.TEMPLATE_ID!;
      const publicKey = process.env.PUBLIC_KEY!;
      const emailData = {
        to_name: "oisha.151115@gmail.com", // Replace with your recipient's email
        from_name: email, // Replace with your sender's email
        company: companyName,
        message: `
          Hi my name is ${firstName} ${lastName}.\n
          My Company name is ${companyName}.\n
          My contacts: ${phoneNumber}.
          Message: ${message}
        `,
        // Add any other template parameters here
      };

      await emailjs
        .send(
          "service_v2ruypg",
          "template_5b1a3fm",
          emailData,
          "V3PSiNNlWPKjEFKEj",
        )
        .then(
          (result) => {
            console.log("Your messages status:", result.text);
          },
          (error) => {
            toast.error(error);

            console.log(error.text);
          },
        );
      toast.success("Your message send");
      reset();
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error when sending email", error);
    }
    console.log(firstName, phoneNumber);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="title">Contact Us</h2>
      <p className="txt">We will happy with your questions</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <CustomField
            id="firstName"
            label="First Name"
            type="text"
            {...register("firstName", { required: true })}
          />
          <CustomField
            id="lastName"
            label="Last Name"
            type="text"
            {...register("lastName", { required: true })}
          />
          <CustomField
            id="companyName"
            label="Company"
            type="text"
            className="sm:col-span-2"
            {...register("companyName", { required: true })}
          />
          <CustomField
            id="email"
            label="Email"
            type="email"
            className="sm:col-span-2"
            {...register("email", { required: true })}
          />

          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="label">
              Phone Number
            </label>
            <div className="relative mt-2.5">
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    autoFormat
                    containerStyle={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    inputStyle={{
                      flex: 1,
                      padding: "18px 60px",
                      fontFamily: "var(--font-inter)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                    buttonStyle={{
                      fontSize: 16,
                      fontWeight: 500,
                      padding: "4px 6px",
                    }}
                    dropdownStyle={{
                      padding: 10,
                      border: "1px solid #bbb",
                      fontFamily: "var(--font-inter)",
                      fontSize: 18,
                      fontWeight: 500,
                      marginTop: 0,
                      minWidth: "300px",
                      width: "100%",
                    }}
                    countryCodeEditable
                    country="uz"
                  />
                )}
              />
            </div>
          </div>
          <CustomField
            id="message"
            label="Message"
            textarea
            className="sm:col-span-2"
            {...register("message", { required: true })}
          />
        </div>
        <div className="mt-6">
          <button
            disabled={!isDirty || !isValid}
            type="submit"
            className="btn-secondary w-full disabled:opacity-70"
          >
            {!isLoading ? `Let's talk` : "Loading..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
