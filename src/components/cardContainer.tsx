import { ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import {TaskCard} from "./card";

export function CardContainer(){
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
            <TaskCard/>
        </div>
    )
}