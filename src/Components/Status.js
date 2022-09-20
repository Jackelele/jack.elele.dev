import { useLanyard } from "use-lanyard";
import classnames from "classnames";
import Tippy from '@tippyjs/react';

const Status = function () {

    const { loading, status } = useLanyard({
        userId: "377175513372033024",
        socket: true,
    });

    const getColor = () => {
        switch(status?.discord_status) {
            case "online":
                return {
                    status: "online",
                    color: "bg-green-500",
                };
            case "idle":
                return {
                    status: "idle",
                    color: "bg-yellow-500",
                };
            case "dnd":
                return {
                    status: "dnd",
                    color: "bg-red-500",
                };
            default: return{
                status: "offline",
                color: "bg-gray-200",
            };
        }
    };

    const getStatus = () => {
        if(loading || !status || status.discord_status === "offline")
        return "Offline"

        const filtered = status.activities?.filter((activity) => activity.type !== 4)?.pop();
        if(!filtered) return "online";

        switch(filtered.name) {
            case "Spotify":
                return ("Listening to %{song} by %{author} from %{album} on Spotify.", {
                    song: filtered.details,
                    author: filtered.state,
                    album: filtered.assets.large_text,
                });
            case "Visual Studio Code":
                return ("%{doing} in Visual Studio Code. (%{workspace})", {
                    doing: filtered.details,
                    workspace: filtered.state,
                })
            default:
                if(filtered.name)
                    return ("playing", {
                        game: filtered.name,
                    })
                return "online"
        }
    }

  return(
<span className="rounded-md flex space-x-2 text-gray-700 items-center dark:text-gray-300">
			<Tippy tooltip={getColor().status}>
				<span
					className={classnames(
						"h-3",
						"w-3",
						"rounded-full",
						"flex-shrink-0",
						getColor().color,
					)}
				/>
			</Tippy>
			<Tippy tooltip={getStatus()}>
				<span className="text-sm truncate">{getStatus()}</span>
			</Tippy>
		</span>
  
  )
};

export default Status;
