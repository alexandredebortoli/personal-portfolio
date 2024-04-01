"use client";

import SectionTitle from "@/app/ui/section-title";
import { useSectionInView } from "@/app/lib/hooks";
import { useFormState, useFormStatus } from "react-dom";
import { State, sendEmail } from "@/app/lib/actions";
import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-50 dark:bg-white dark:bg-opacity-10"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(sendEmail, initialState);
  const [inputSender, setInputSender] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (state.message) {
      if (state.message === "Email sent successfully.") {
        toast.success(state.message);
        setInputSender("");
        setInputMessage("");
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionTitle>Contact me</SectionTitle>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact directly at{" "}
        <a href="mailto:asdebortoli@gmail.com" className="underline">
          asdebortoli@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black" action={dispatch}>
        <input
          id="sender"
          name="sender"
          type="email"
          className="h-14 rounded-lg borderBlack p-4 focus:outline-none focus:border-2 focus:border-black dark:focus:border-0 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your email"
          aria-describedby="sender-error"
          onChange={(e) => setInputSender(e.target.value)}
          value={inputSender}
        />
        <div id="sender-error" aria-live="polite" aria-atomic="true">
          {state.errors?.sender &&
            state.errors.sender.map((error: string) => (
              <p
                className="ml-3 mt-3 text-left text-sm text-red-500"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
        <textarea
          id="message"
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-none focus:border-2 focus:border-black dark:focus:border-0 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your message"
          aria-describedby="sender-error"
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
        />
        <div id="message-error" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors.message.map((error: string) => (
              <p
                className="ml-3 mb-3 text-left text-sm text-red-500"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
        <SubmitBtn />
      </form>
    </section>
  );
}
