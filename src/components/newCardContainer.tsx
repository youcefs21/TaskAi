import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";
import { NewGroupModal } from "./newGroupModal";
import { cardHolder } from "./states";

export function NewCardContainer({addCardHolder}:{addCardHolder:(x:cardHolder)=>void}){
    const [opened, setOpened] = useState(false); 
    
    return(
        <div className="bg-transparent outline-dashed outline-stone-700 flex flex-col w-80 h-full rounded-2xl">
            <div className={"flex flex-col w-full h-full"}>
            <NewGroupModal opened={opened} setOpened={(x) => setOpened(x)} addCardHolder={addCardHolder}/>
                <button className="flex flex-col items-center justify-center hover:bg-slate-100 w-full h-full rounded-2xl"
                                    onClick = {() => setOpened(true)}>
                    <IconPlus size={77} />
                    <p className={"text-stone-400 font-sans"}>New section</p>
                </button>
            </div>
        </div>        
    )
}