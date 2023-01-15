import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export function NewCardContainer(){
    return(
        <div className="bg-transparent outline-dashed outline-stone-700 flex flex-col w-fit h-full p-4 rounded-2xl">
            <div className={"flex justify-between w-full px-3"}>
                <div>
                <ActionIcon className="w-fit p-2">
                    <IconPlus size={18} />
                    <p className={"text-stone-400 font-sans"}>New section</p>
                </ActionIcon>
                </div>
            </div>
        </div>        
    )
}