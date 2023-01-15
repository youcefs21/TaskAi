import { ActionIcon, Input, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconAt, IconLetterT, IconPlus} from "@tabler/icons";
import { useEffect, useState } from "react";
import {TaskCard} from "./card";
import { NewTaskModal } from "./newTaskModal";
import { card, cardHolder } from "./states";

const clockHelper = (d: number) => { 
    d = Math.floor(d / 1000); 
    let s = Math.abs(d % 60); // 1,2...59,0 but I want 0,1...59 
    s -= d < 0 ? 1 : 0; 
    s = s < 0 ? 60 + s : s; 
    d = Math.floor(d / 60) 
    let m = Math.abs(d % 60); 
    m -= d < 0 ? 1 : 0; 
    m = m < 0 ? 60 + m : m;
    d = Math.floor(d / 60) 
    let h = Math.abs(d % 24); 
    h -= d < 0 ? 1 : 0; 
    h = h < 0 ? 24 + h : h; 
    d = Math.floor(d / 24); 
    const neg = d < 0 ? "-" : ""; 
    d += d < 0 ? 1 : 0; 
    return neg + Math.abs(d).toString().padStart(2, "0") + ":" + h.toString().padStart(2, "0") + ":" + m.toString().padStart(2, "0") + ":" + s.toString().padStart(2, "0")
}

const dayms = (24*60*60*1000)

export function CardContainer({cardHolderState}: {cardHolderState: cardHolder}) {
    const [cards, setCards] = useState<card[]>([]) 
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const x = setInterval(() => {
            setCards((cs) => {
                const newCards: card[] = []
                cs.forEach((c) => {
                    const dueDate = c.dueDate?.getTime()
                    const dueTime = c.dueTime?.getTime()
                    if (!dueDate || !dueTime) return;
                    const extra = dueDate - dueTime
                    // floor div and add to time
                    const due = Math.floor(extra/dayms)*dayms + dueTime + dayms

                    const now = new Date()

                    newCards.push({
                        ...c, 
                        countdown: clockHelper(due - now.getTime())
                    })
                })
                return newCards
            })
        }, 100)

        return () => clearInterval(x)
    }, [])

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