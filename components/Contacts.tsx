"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PhoneInput from "react-phone-input-2";
import { Switch } from "@headlessui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import CustomField from "./CustomField";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sw = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className={classNames(
            agreed ? "bg-indigo-600" : "bg-gray-200",
            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          )}
        >
          <span className="sr-only">Agree to policies</span>
          <span
            aria-hidden="true"
            className={classNames(
              agreed ? "translate-x-3.5" : "translate-x-0",
              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
            )}
          />
        </Switch>
      </div>
      <Switch.Label className="text-sm leading-6 text-gray-600">
        By selecting this, you agree to our
        <a href="#" className="font-semibold text-indigo-600">
          privacy&nbsp;policy
        </a>
        .
      </Switch.Label>
    </Switch.Group>
  );
};

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
    formState: { errors, isLoading, isSubmitSuccessful, isSubmitting },
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
            label="First Name"
            type="text"
            {...register("firstName")}
          />
          <CustomField
            label="Last Name"
            type="text"
            {...register("lastName")}
          />
          <CustomField
            label="Company"
            type="text"
            className="sm:col-span-2"
            {...register("companyName")}
          />
          <CustomField
            label="Email"
            type="email"
            className="sm:col-span-2"
            {...register("email")}
          />

          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="label">
              Phone Number
            </label>
            <div className="relative mt-2.5">
              <Controller
                name="phoneNumber"
                control={control}
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
              {errors.phoneNumber && (
                <span className="text-base font-medium text-red-500">
                  Please enter your phone
                </span>
              )}
            </div>
          </div>
          <CustomField label="Message" textarea />
        </div>
        <div className="mt-6">
          <button
            disabled={isSubmitting}
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
