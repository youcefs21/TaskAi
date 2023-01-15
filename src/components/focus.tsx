
import { useState } from "react"
import { TaskCard } from "./card"
import { CardContainer } from "./cardContainer"
import { NewCardContainer } from "./newCardContainer"
import { card, cardHolder } from "./states"

export function Focus({cards}: {cards: card[]}) {
    const [focusedCardId, setFocusedCardId] = useState(0)

    return(
        <div className="grid grid-cols-3 w-screen h-full p-10">
            <div className="col-span-2 border-2 rounded-md p-1 gap-1 flex flex-col text-center justify-between py-10">
                <div>
                    <h1 className="text-xl">{cards[focusedCardId]?.group}</h1>
                    <h2 className="text-3xl">{cards[focusedCardId]?.name}</h2>
                </div>
                <div>
                    <div className="text-7xl font-mono">
                        {cards[focusedCardId]?.countdown}
                    </div>
                    <button className="bg-emerald-500 rounded p-2 h-fit text-white">play</button>
                </div>
                {cards[focusedCardId]?.notes &&
                    <div>{cards[focusedCardId]?.notes}</div>
                }
                <div className="flex justify-center gap-6 text-white">
                    <button className="bg-emerald-500 rounded p-2">Done</button>
                    <button className="bg-gray-500 rounded p-2">Break</button>
                    <button className="bg-blue-500 rounded p-2">Next</button>
                </div>

            </div>
            <div className="overflow-auto scrollbar-none border-2 rounded-md p-1 ">
                <div className="gap-1 flex flex-col">
                    {cards.map((card, i) => 
                        <button onClick={() => setFocusedCardId(i)}>
                            <TaskCard cardState = {card} focused={i === focusedCardId}/>
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}