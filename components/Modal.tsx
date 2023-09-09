"use client";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { SelectComponent } from "./Select";
import { MdClose } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CustomField from "./CustomField";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
  business_activity: string;
  premises: string;
  owners: number | null;
  vizas: number | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export const Modal = ({ isOpen = false, setIsOpen }: ModalProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading, isDirty, isValid },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      business_activity: "",
      premises: "",
      owners: 0,
      vizas: 0,
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [tab, setTab] = useState(false);

  const businness_activity = [
    { value: "accounting_auditing", label: "Accounting & Auditing" },
    { value: "advertising", label: "Advertising" },
    { value: "business_consultancy", label: "Business Consultancy" },
  ];
  const premises = [
    { value: "virtual_office", label: "Virtual Office" },
    { value: "warehouse", label: "Warehouse" },
    { value: "business_centre", label: "Business Centre" },
    { value: "physical_office", label: "Physical Office" },
    { value: "shop_front", label: "Shop front" },
  ];

  return (
    <AnimatePresence>
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="section"
          className="fixed inset-0 z-10 flex items-center justify-center overflow-y-hidden"
        >
          <div className="flex flex-col px-4 py-8 text-center">
            <Dialog.Overlay />
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-primary/50 opacity-90"></div>
            </div>

            <motion.div
              className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
            >
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div
                className="inline-block transform overflow-y-visible rounded-lg bg-white text-left shadow-xl transition-all sm:align-middle"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <form className="flex h-auto flex-col overflow-y-visible bg-white p-3 shadow-xl sm:w-[400px] sm:p-6 md:w-[500px]">
                  <div className="mb-3 flex items-center justify-end">
                    <button
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="flex items-center justify-center"
                    >
                      <MdClose className="h-7 w-7 text-black" />
                    </button>
                  </div>
                  <div className="mb-3 flex w-full items-center justify-between border-b-2 border-gray-200 pb-4">
                    <h3 className="text-base font-medium text-gray-800 sm:text-xl">
                      Cost Calculator
                    </h3>
                    <p className="text-sm font-normal text-slate-700 sm:text-lg">
                      Step {!tab ? "1 of 2" : "2 of 2"}
                    </p>
                  </div>
                  {!tab ? (
                    <div className="flex flex-col space-y-5">
                      <div className="flex w-full flex-col">
                        <label className="label">
                          Choose your business activity
                        </label>
                        <SelectComponent options={businness_activity} />
                      </div>
                      <div className="flex w-full flex-col">
                        <label className="label">
                          What type of premises would you require?
                        </label>
                        <SelectComponent options={premises} />
                      </div>
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <CustomField
                          id="owners"
                          label="Number of owners"
                          type="number"
                        />
                        <CustomField
                          id="vizas"
                          label="Number of vizas"
                          type="number"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setTab((prev) => !prev)}
                        className="btn-secondary mt-5 w-full !p-2"
                      >
                        Next
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-5">
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <CustomField
                          id="firstName"
                          label="First Name"
                          type="text"
                        />
                        <CustomField
                          id="lastName"
                          label="Last Name"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="" className="label">
                          Phone Number:
                        </label>
                        <PhoneInput
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
                      </div>
                      <div className="flex flex-col">
                        <CustomField
                          id="email"
                          label="Email Address"
                          type="email"
                          placeholder="info@almuda.uz"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <button
                          onClick={() => setTab((prev) => !prev)}
                          className="bg-black py-2 text-base font-semibold uppercase text-white md:text-lg"
                        >
                          Previous
                        </button>
                        <button
                          disabled={!isDirty || !isValid}
                          type="submit"
                          className="btn-secondary rounded-none !py-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </Dialog>
    </AnimatePresence>
  );
};
