import Link from "next/link";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-4 z-50"
    >
      <Disclosure
        as="nav"
        className="flex w-full items-center space-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-lg"
      >
        {/* Open indicates whether the disclosure is open or not */}
        {({ open }) => (
          <>
            {/* Mobile Open/Close Btn */}
            <Disclosure.Button className="rounded-xl p-2 text-white hover:text-gray-300 sm:hidden">
              {!open ? (
                <Bars3Icon className="h-6 w-6" />
              ) : (
                <XMarkIcon className="h-6 w-6" />
              )}
            </Disclosure.Button>
            {/* Mobile Open/Close Btn */}

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
            {/* Desktop Links */}
          </>
        )}
      </Disclosure>
    </motion.div>
  );
};

export default Nav;
