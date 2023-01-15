import { ActionIcon, Input, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconAt, IconLetterT, IconPlus} from "@tabler/icons";
import { useState } from "react";
import {TaskCard} from "./card";
import { NewTaskModal } from "./newTaskModal";
import { card, cardHolder } from "./states";

const cardsInit : card[]= [{   
    name: "Calc Assignment",
    notes: "Calc make me go clac",
    timeElapsed: 0,
    dueDate: new Date (),
    status: "active",
    tags: [{name: "Hard", colour: "red"}],
    estimatedTime: 10
}]


export function CardContainer({cardHolderState}: {cardHolderState: cardHolder}) {
    const [cards, setCards] = useState<card[]>([]) 

    const [opened, setOpened] = useState(false);

    const addCard = (x: card) => {
        console.log(x)
        console.log([...cards, x])
        setCards([...cards, x])
    }

    return(
        <div className="bg-slate-300 flex flex-col w-80 h-full p-4 rounded-2xl overflow-auto">
            <div className={"flex justify-between w-full px-3"}>
                <h1 className={"font-bold text-xl"}>
                    {cardHolderState.title}
                </h1>
                <NewTaskModal opened={opened} setOpened={(x) => setOpened(x)} addCard={addCard}/>
                <ActionIcon onClick={() => setOpened(true)}>
                    <IconPlus size={18} />
                </ActionIcon>
            </div>
            {cards.map(card =>
                <TaskCard cardState = {card}/>)}
        </div>
    )
}