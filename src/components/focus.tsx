
import { useState } from "react"
import { TaskCard } from "./card"
import { CardContainer } from "./cardContainer"
import { NewCardContainer } from "./newCardContainer"
import { card, cardHolder } from "./states"

export function Focus({focusedCardId, cards}: {focusedCardId: number, cards: card[]}) {

    return(
        <div className="grid grid-cols-3 w-screen h-full p-10">
            <div className="col-span-2 border-2 rounded-md p-1 gap-1 flex flex-col">
                {cards[focusedCardId]?.name}

            </div>
            <div className="overflow-auto scrollbar-none border-2 rounded-md p-1 ">
                <div className="gap-1 flex flex-col">
                    {cards.map((card, i) =>
                        <TaskCard cardState = {card} focused={i === focusedCardId}/>)}
                </div>
            </div>

        </div>
    )
}