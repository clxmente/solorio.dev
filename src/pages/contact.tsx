import type { NextPage } from "next";

import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";
import { motion } from "framer-motion";
import * as EmailValidator from "email-validator";

import { SiDiscord, SiTwitter } from "react-icons/si";
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

import Social from "../components/social";

const Contact: NextPage = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form);
    console.log(formData);

    const toastID = toast.loading("Sending email...");
    // Send email
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (data.success) {
      toast.success(data.message, { id: toastID });
      return;
    } else {
      toast.error(data.error, { id: toastID });
      return;
    }
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#6C91C2",
            color: "#f3f4f6",
            fontWeight: 500,
          },
        }}
      />

      <motion.main
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-12 px-5 text-white"
      >
        {/* Header and small intro */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">
            Let&apos;s get in touch 💬
          </h1>
          <p className="font-semibold opacity-70">
            You can reach out to me via email, discord, or other social medias
            directly or by filling out the form below to send me an email.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="col-span-2 flex flex-col space-y-3 md:col-span-1">
              <Social
                text="clem#0001"
                link="https://discord.com/users/393069508027351051"
                hover="group-hover:text-[#7289d9]"
                _icon={SiDiscord}
              />
              <Social
                text="clxmente"
                link="https://twitter.com/clxmente"
                hover="group-hover:text-[#00ACEE]"
                _icon={SiTwitter}
              />
              <Social
                text="clem@solorio.dev"
                link="mailto:clem@solorio.dev"
                hover="group-hover:text-[#6C91C2]"
                _icon={EnvelopeIcon}
              />
            </div>

            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
              className="col-span-2 space-y-3 rounded-md border border-white/20 bg-[#1b2535] p-5 backdrop-blur-sm"
            >
              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="name" className="font-bold text-white">
                  Email
                </label>
                <div className="relative flex items-center rounded-md">
                  <EnvelopeIcon className="absolute ml-3 flex h-5 w-5 text-gray-500" />
                  <input
                    name="email"
                    type="text"
                    placeholder="your@email.com"
                    autoComplete="off"
                    className="block w-full resize-none rounded-md bg-gray-600/30 py-2 pl-10 text-sm text-white placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>
              {/* End Email */}

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="name" className="font-bold text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={7}
                  className="block w-full resize-none break-words rounded-md bg-gray-600/30 p-2 text-sm text-white"
                />
              </div>
              {/* End Message */}

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center space-x-3 rounded-full bg-[#6C91C2] py-2 px-4 transition-transform hover:scale-95"
                >
                  <p className="font-semibold">Send</p>
                  <PaperAirplaneIcon className="h-6 w-6" />
                </button>
              </div>
              {/* End Submit */}
            </form>
          </div>
        </div>
        {/* Header and small intro */}
      </motion.main>
    </>
  );
};

export default Contact;
