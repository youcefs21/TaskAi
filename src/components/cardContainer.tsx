import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import {TaskCard} from "./card";
import { card } from "./states";

export function CardContainer(){
    const cardList : card[]= [
        {   name: "Calc Assignment",
            notes: "Calc make me go clac",
            timeElapsed: 0,
            dueDate: new Date (),
            status: "active",
            tags: [{name: "Hard", colour: "red"}],
            estimatedTime: 10} 
    ]

    return(
        <div className="bg-slate-300 flex flex-col w-fit h-full p-4 rounded-2xl">
            <div className={"flex justify-between w-full px-3"}>
                <h1 className={"font-bold text-xl"}>
                    Calculus
                </h1>
                <ActionIcon>
                    <IconPlus size={18} />
                </ActionIcon>
            </div>
            {cardList.map(card =>
                <TaskCard cardState = {card}/>)}
        </div>
    )
}