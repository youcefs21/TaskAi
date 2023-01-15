import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export function NewCardContainer(){
    return(
        <div className="bg-transparent outline-dashed outline-stone-700 flex flex-col w-fit h-full p-4 rounded-2xl">
            <div className={"flex flex-col m-auto w-full px-3"}>
                    <button>
                        <IconPlus size={77} />
                        <p className={"text-stone-400 font-sans"}>New section</p>
                    </button>
            </div>
        </div>        
    )
}