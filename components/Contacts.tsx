"use client";
import PhoneInput from "react-phone-input-2";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import { TextFieldController } from "./inputs/TextFieldController";

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
    handleSubmit,
    control,
    formState: { isLoading, isDirty, isValid },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      message: "Hi there, ",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data, event) => {
    event?.preventDefault();

    const { firstName, lastName, companyName, email, phoneNumber, message } =
      data;
    try {
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
      const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY!;

      const emailData = {
        to_name: "xasanof17@gmail.com",
        from_name: email,
        company: companyName,
        message: `
        Hi my name is ${firstName} ${lastName}.\n
        My Company name is ${companyName}.\n
        My contacts: ${phoneNumber}.
        Message: ${message}
      `,
      };
      const data = emailjs.send(serviceID, templateID, emailData, serviceKey);

      toast.promise(data, {
        loading: "Sending...",
        success: "Your message sent",
        error: "Faield to sent",
      });

      reset();
    } catch (error) {
      console.log(error);
    }
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
          <TextFieldController
            label="First Name"
            control={control}
            name="firstName"
          />

          <TextFieldController
            label="Last Name"
            control={control}
            name="lastName"
          />
          <TextFieldController
            label="Company"
            control={control}
            name="companyName"
            className="sm:col-span-2"
          />
          <TextFieldController
            label="Email"
            control={control}
            name="email"
            className="sm:col-span-2"
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
          <TextFieldController
            label="Message"
            control={control}
            name="message"
            className="sm:col-span-2"
          />
          {/* <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomField
                {...field}
                id="message"
                label="Message"
                textarea
                className="sm:col-span-2"
              />
            )}
          /> */}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="btn-secondary w-full disabled:opacity-30"
          >
            {!isLoading ? `Let's talk` : "Loading..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
