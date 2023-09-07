import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
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
                className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                        id="modal-headline"
                      >
                        There'll we our calculator
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description
                          as="p"
                          className="text-sm text-gray-500"
                        >
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    tabIndex={0}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    tabIndex={0}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
