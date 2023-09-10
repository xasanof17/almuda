"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextFieldController } from "./inputs/TextFieldController";
import { PhoneInputController, TextAreaController } from "./inputs";
import { sendEmail } from "@/utils";
import { FormData } from "@/types";
import { Button } from "./Button";

const Contacts = () => {
  const {
    handleSubmit,
    control,
    formState: { isLoading },
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
      sendEmail({
        firstName,
        lastName,
        companyName,
        email,
        phoneNumber,
        message,
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

          <PhoneInputController
            label="Phone"
            control={control}
            name="phoneNumber"
          />
          <TextAreaController
            control={control}
            label="Message"
            name="message"
            className="sm:col-span-2"
          />
        </div>
        <div className="mt-6">
          <Button
            title="Let&apos;s Talk"
            type="submit"
            className="btn-secondary w-full disabled:opacity-30"
            text="Let&apos;s Talk"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
