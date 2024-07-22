import type { NextPage } from "next";

import { motion } from "framer-motion";

import { age } from "../utils/age";

import { SiGithub, SiLinkedin } from "react-icons/si";

import Project from "../components/project";
import Technologies from "../components/technologies";

const Home: NextPage = () => {
  return (
    <motion.main
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 px-2 text-white sm:px-5"
    >
      {/* Header and small intro */}
      <div className="space-y-4">
        <div className="flex space-x-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-sky-400"
            href="https://github.com/clxmente"
          >
            <SiGithub className="h-7 w-7" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-sky-400"
            href="https://linkedin.com/in/clementesolorio"
          >
            <SiLinkedin className="h-7 w-7" />
          </a>
        </div>
        <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl">
          Hello, I&apos;m Clemente
        </h1>
        <p className="font-semibold opacity-70">
          {Math.floor(age)}. Recent Computer Science graduate{" "}
          <a
            className="text-sky-400 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.fullerton.edu/"
          >
            @CSUF
          </a>
          . Proficient in Python, JavaScript/TypeScript, React, Next.js.
          Passionate about crafting beautiful and innovative web applications.
        </p>
      </div>
      {/* END Header and small intro */}

      {/* About Me */}
      <div className="space-y-4">
        <h2>About Me 🔍</h2>
        <p className="font-semibold opacity-70">
          I&apos;m a full stack web developer, currently focusing on building
          modern web applications with React and React frameworks such as
          Next.js, Typescript, and a variety of database solutions. I&apos;m
          currently building{" "}
          <a
            className="text-sky-400 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://stardew.app/?utm_campaign=ClemSite&utm_source=Website&utm_medium=Link"
          >
            stardew.app
          </a>
          , a web application for Stardew valley players that allows them to
          track their progress towards 100% completion in a simple and easy to
          use interface.
        </p>
      </div>
      {/* END About Me */}

      {/* Projects */}
      <div className="space-y-4">
        <h2>Projects 🕹️</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Project
            title="🎥 spotify-obs"
            description="Display your Spotify songs as an OBS browser source using Lanyard. Fully customizable and easy to use."
            gh_url="https://github.com/clxmente/spotify-obs"
            proj_url="https://spotify-obs.com"
          />
          <Project
            title="🤖 tuffysearch"
            description="CSUF course discovery tool using NLP via OpenAI. Search CSUF's catalog of over 3500 couses using natural language."
            gh_url="https://github.com/clxmente/tuffysearch"
            proj_url="https://tuffysearch.com/?utm_campaign=portfolio&utm_source=solorio.dev"
          />
          <Project
            title="🌟 stardew.app"
            description="A web application for Stardew valley players that allows them to track their progress towards 100% completion in a simple and easy to use interface."
            gh_url="https://github.com/communitycenter/stardew.app"
            proj_url="https://stardew.app/?utm_campaign=ClemSite&utm_source=Website&utm_medium=Link"
          />
          <Project
            title="🎮 NBA Players Game"
            description="A fun web game where you can try and guess as many NBA players as you can within a time limit. You can also compare your score with other players through a leaderboard, and share your game with your friends through a link."
            gh_url="https://github.com/clxmente/NBA-Players-Game"
            proj_url="https://nba-game.solorio.dev/"
          />
          <Project
            title="🥩 Tender"
            description="A web application for users to find new foods and restaurants to try. Personalied recipe suggestions based on dietary preferences and restaurants based on location."
            gh_url="https://github.com/clxmente/tender"
            proj_url="https://tender.vercel.app/"
          />
          <Project
            title="🌐 solorio.dev"
            description="My personal portfolio website built with Next.js and Tailwind CSS."
            gh_url="https://github.com/clxmente/solorio.dev"
          />
          <Project
            title="🔒 Python Password Manager"
            description="A CLI based password manager written in Python. Uses AES encryption to store passwords protected by a SHA256 hashed master password."
            gh_url="https://github.com/clxmente/Python-Password-Manager"
          />
          <Project
            title="📂 University Database"
            description="Designed and implemented a database simulating a university in MySQL. Includes a frontend interface for users to interact with the database, written in HTML/CSS with the backend written in PHP."
          />
        </div>
      </div>
      {/* END Projects */}

      {/* Technologies */}
      <div className="space-y-4">
        <h2>Technologies 💻</h2>
        <Technologies />
      </div>
      {/* END Technologies */}
    </motion.main>
  );
};

export default Home;
