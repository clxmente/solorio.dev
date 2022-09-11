import type { NextPage } from "next";

import { motion } from "framer-motion";

import { age } from "../utils/age";

const Home: NextPage = () => {
  return (
    <motion.main
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 px-5 text-white"
    >
      {/* Header and small intro */}
      <div className="space-y-4">
        <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl">
          Hello, I&apos;m Clemente
        </h1>
        <p className="font-semibold opacity-70">
          I&apos;m a {age.toFixed(4)} year old software engineer and student
          enrolled{" "}
          <a
            className="text-sky-400 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.fullerton.edu/"
          >
            @CSUF
          </a>
          . I am currently in my 4th year of university, pursuing my Bachelors
          degree in Computer Science, with an expected graduation date of May
          2023.
        </p>
      </div>
      {/* END Header and small intro */}

      {/* About Me */}
      <div className="space-y-4">
        <h2>About Me 🔍</h2>
        <p className="font-semibold opacity-70">
          I&apos;m an aspiring software engineer, currently focusing on building
          modern web applications with React and React frameworks such as
          Next.js, Typescript, and a variety of database solutions. I&apos;m
          currently building{" "}
          <a
            className="text-sky-400 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://stardew.app/?utm_campaign=ClemSite&utm_source=Website&utm_medium=Link"
          >
            stardew.app
          </a>
          , a web application for Stardew valley players that allows them to
          track their progress towards 100% completion in a simple and easy to
          use interface.
        </p>
        <p className="font-semibold opacity-70">
          Other than programming, I&apos;m a huge fan of sports, especially
          basketball. I&apos;ve played all kinds of sports recreationally with
          friends and in general, I love being outdoors and active.
        </p>
      </div>
      {/* END About Me */}
    </motion.main>
  );
};

export default Home;
