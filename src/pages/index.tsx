import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="space-y-12 px-5 text-white">
      {/* Header and small intro */}
      <div className="space-y-4">
        <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl">
          Hello, I&apos;m Clemente
        </h1>
        <p className="font-semibold opacity-80">I&apos;m a </p>
      </div>
      {/* Header and small intro */}
    </main>
  );
};

export default Home;
