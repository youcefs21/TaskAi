import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export function NewCardContainer(){
    return(
        <div className="bg-transparent outline-dashed outline-stone-700 flex flex-col w-80 h-full rounded-2xl">
            <div className={"flex flex-col w-full h-full"}>
                <button className="flex flex-col items-center justify-center hover:bg-slate-100 w-full h-full rounded-2xl">
                    <IconPlus size={77} />
                    <p className={"text-stone-400 font-sans"}>New section</p>
                </button>
            </div>
        </div>        
    )
}