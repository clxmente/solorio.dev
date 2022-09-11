import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Song from "./song";

const Nav = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50"
    >
      <Disclosure
        as="nav"
        className="w-full space-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-lg"
      >
        {/* Open indicates whether the disclosure is open or not */}
        {({ open }) => (
          <>
            <div className="flex items-center justify-between">
              <div>
                {/* Mobile Open/Close Btn */}
                <Disclosure.Button
                  className="rounded-xl p-2 text-white hover:text-gray-300 sm:hidden"
                  onClick={() =>
                    void new Audio("/pop.mp3").play().catch(() => null)
                  }
                >
                  {!open ? (
                    <Bars3Icon className="h-6 w-6" />
                  ) : (
                    <XMarkIcon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
                {/* END Mobile Open/Close Btn */}

                {/* Desktop Links */}
                <div className="hidden space-x-4 sm:flex">
                  <Link href="/">
                    <a className="rounded-md p-2 font-semibold text-gray-300 hover:bg-gray-700/30">
                      Home
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="rounded-md p-2 font-semibold text-gray-300 hover:bg-gray-700/30">
                      Contact
                    </a>
                  </Link>
                </div>
                {/* END Desktop Links */}
              </div>

              {/* SPOTIFY??? */}
              <Song />
              {/* END SPOTIFY??? */}
            </div>

            {/* Mobile Links */}
            <Transition
              show={open}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-250 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className="my-2 border-t border-gray-700 sm:hidden"
                static
              >
                <div className="mt-2 flex flex-col space-y-1">
                  <Link href="/" passHref>
                    <Disclosure.Button
                      as="a"
                      className="rounded-md p-2 font-semibold text-gray-300 hover:bg-gray-900/50"
                    >
                      Home
                    </Disclosure.Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Disclosure.Button
                      as="a"
                      className="rounded-md p-2 font-semibold text-gray-300 hover:bg-gray-900/50"
                    >
                      Contact
                    </Disclosure.Button>
                  </Link>
                </div>
              </Disclosure.Panel>
            </Transition>
            {/* Mobile Links */}
          </>
        )}
      </Disclosure>
    </motion.div>
  );
};

export default Nav;
