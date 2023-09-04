"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PhoneInput from "react-phone-input-2";
import { Switch } from "@headlessui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";

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
            toast.loading("Sending...");

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
          <div>
            <label htmlFor="firstName" className="label">
              First name
            </label>
            <div className="mt-2.5">
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                className="input"
              />
              {errors.firstName && (
                <span className="text-base font-medium text-red-500">
                  Please enter your first name
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="label">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                {...register("lastName")}
                type="text"
                id="lastName"
                className="input"
              />
              {errors.lastName && (
                <span className="text-base font-medium text-red-500">
                  Please enter your last name
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="companyName" className="label">
              Company
            </label>
            <div className="mt-2.5">
              <input
                {...register("companyName")}
                type="text"
                id="lastName"
                className="input"
              />
              {errors.companyName && (
                <span className="text-base font-medium text-red-500">
                  Please enter your company name
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="mt-2.5">
              <input
                {...register("email")}
                type="email"
                id="email"
                className="input"
              />
              {errors.email && (
                <span className="text-base font-medium text-red-500">
                  Please enter your email
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="label">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    autoFormat
                    countryCodeEditable
                    inputClass="input"
                    autocompleteSearch
                    containerStyle={{ flex: 1 }}
                    enableSearch
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
          <div className="sm:col-span-2">
            <label htmlFor="message" className="label">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="input"
                defaultValue=""
              />
              {errors.message && (
                <span className="text-base font-medium text-red-500">
                  Please enter your message
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn-primary w-full disabled:opacity-70"
          >
            {!isLoading ? `Let's talk` : "Loading..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
