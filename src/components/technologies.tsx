import { IconType } from "react-icons";
import {
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Item = ({ name, _icon }: { name: string; _icon: IconType }) => {
  return (
    <div className="flex items-center space-x-2 rounded-md border border-white/10 bg-[#1b2535] p-3">
      <_icon className="h-6 w-6 text-white/80" />
      <p className="text-white/80">{name}</p>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <Item name="Python" _icon={SiPython} />
      <Item name="Typescript" _icon={SiTypescript} />
      <Item name="Javascript" _icon={SiJavascript} />
      <Item name="C++" _icon={SiCplusplus} />
      <Item name="php" _icon={SiPhp} />
      <Item name="HTML" _icon={SiHtml5} />
      <Item name="CSS" _icon={SiCss3} />
      <Item name="Tailwind CSS" _icon={SiTailwindcss} />
      <Item name="MySQL" _icon={GrMysql} />
      <Item name="PostgreSQL" _icon={SiPostgresql} />
      <Item name="MongoDB" _icon={SiMongodb} />
      <Item name="Prisma" _icon={SiPrisma} />
      <Item name="Node.js" _icon={SiNodedotjs} />
      <Item name="React" _icon={SiReact} />
      <Item name="Next.js" _icon={SiNextdotjs} />
      <Item name="Git" _icon={SiGit} />
    </div>
  );
};

export default Technologies;
