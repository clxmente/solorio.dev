import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <main className="space-y-12 px-5 text-white">
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
    </main>
  );
};

export default Contact;
