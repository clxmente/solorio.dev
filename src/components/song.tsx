import { useLanyardWs } from "use-lanyard";

import { SiSpotify } from "react-icons/si";

const Song = () => {
  const data = useLanyardWs("393069508027351051");

  if (!data?.spotify) {
    return (
      <div className="flex items-center space-x-2 text-gray-500">
        <p className="font-medium">Not Playing Anything</p>
        <SiSpotify className="h-5 w-5" />
      </div>
    );
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://open.spotify.com/track/${data.spotify.track_id}`}
      className="group flex items-center space-x-2 overflow-x-clip font-medium text-gray-400 hover:text-green-500/80"
    >
      <span className="truncate">
        <span className="underline">{data.spotify.song}</span> by{" "}
        {data.spotify.artist}
      </span>
      <SiSpotify className="h-5 w-5 flex-shrink-0" />
    </a>
  );
};

export default Song;
