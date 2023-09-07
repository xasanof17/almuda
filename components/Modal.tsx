import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { SelectComponent } from "./Select";
import { MdClose } from "react-icons/md";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const businness_activity = [
    { value: "accounting_auditing", label: "Accounting & Auditing" },
    { value: "advertising", label: "Advertising" },
    { value: "business_consultancy", label: "Business Consultancy" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="div"
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
              className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}
            >
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
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
                <form className="flex h-auto w-[500px] flex-col bg-white p-6">
                  <div className="mb-3 flex items-center justify-end">
                    <button
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="flex items-center justify-center"
                    >
                      <MdClose className="h-7 w-7 text-black" />
                    </button>
                  </div>
                  <div className="flex w-full items-center justify-between border-b-2 border-black pb-4">
                    <h3 className="text-xl font-medium text-slate-800">
                      Cost Calculator
                    </h3>
                    <p className="text-lg font-normal text-slate-700">
                      Step 1 of 2
                    </p>
                  </div>
                  <div className="flex w-full flex-col py-4">
                    <label htmlFor="text-lg font-medium text-slate-100 mb-3">
                      Choose your business activity
                    </label>
                    <SelectComponent options={businness_activity} />
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
