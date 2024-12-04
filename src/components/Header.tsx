import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
} from "@headlessui/react";
import clsx from "clsx";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { userAtom } from "../state-management/user";
import { useAtomSelector } from "reactjs-statify";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const userData = useAtomSelector({ atom: userAtom, props: "userData" });

  const handleOnOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnEmailChange = (email: string) => {
    setFormValue((prev) => ({ ...prev, email }));
  };

  const handleOnPasswordChange = (password: string) => {
    setFormValue((prev) => ({ ...prev, password }));
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const { email, password } = formValue;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up

        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <Button onClick={handleOnOpen}>login</Button>
      {userData.email}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={handleOnClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Login
              </DialogTitle>
              <form onSubmit={handleOnSubmit}>
                <Field>
                  <Label>Email</Label>

                  <Input
                    value={formValue.email}
                    type="email"
                    name="email"
                    onChange={(e) => {
                      handleOnEmailChange(e.currentTarget.value);
                    }}
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                  />
                </Field>
                <Field>
                  <Label>Password</Label>

                  <Input
                    value={formValue.password}
                    type="password"
                    name="password"
                    onChange={(e) => {
                      handleOnPasswordChange(e.currentTarget.value);
                    }}
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                  />
                </Field>

                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    type="submit"
                  >
                    Submit!
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Header;
