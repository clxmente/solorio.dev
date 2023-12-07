import { useLanyardWs } from "use-lanyard";

import { IconType } from "react-icons";

interface Props {
  text: string;
  link: string;
  social: string;
  hover?: string;
  _icon: IconType;
}

const Social = ({ text, link, hover, _icon, social }: Props) => {
  if (social === "Discord") {
    const data = useLanyardWs("393069508027351051");

    if (!data?.discord_status) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center space-x-2 rounded-md border border-white/10 bg-[#1b2535] p-4 transition-transform hover:scale-95"
          data-umami-event="Discord Viewed"
        >
          <_icon className={"h-6 w-6 text-white/80 " + hover} />
          <p className="font-medium text-gray-400">{text}</p>
        </a>
      );
    }

    let color = "bg-gray-500";
    switch (data.discord_status) {
      case "online":
        color = "bg-green-500";
        break;
      case "idle":
        color = "bg-yellow-500";
        break;
      case "dnd":
        color = "bg-red-500";
        break;
    }

    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center space-x-2 rounded-md border border-white/10 bg-[#1b2535] p-4 transition-transform hover:scale-95"
        data-umami-event="Discord Viewed"
      >
        <div className="relative">
          <_icon className={"h-6 w-6 text-white/80 " + hover} />
          <div
            className={
              "absolute -right-1 -bottom-0.5 h-2 w-2 rounded-full border border-[#1b2535] " +
              color
            }
          />
        </div>
        <p className="font-medium text-gray-400">{text}</p>
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center space-x-2 rounded-md border border-white/10 bg-[#1b2535] p-4 transition-transform hover:scale-95"
      data-umami-event={social + " Viewed"}
    >
      <_icon className={"h-6 w-6 text-white/80 " + hover} />
      <p className="font-medium text-gray-400">{text}</p>
    </a>
  );
};

export default Social;
