import type { NextPage } from "next";

import { motion } from "framer-motion";

const Contact: NextPage = () => {
  return (
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
          directly or by filling out the form below.
        </p>
      </div>
      {/* Header and small intro */}
    </motion.main>
  );
};

export default Contact;
