import { useState } from "react"
import { CardContainer } from "./cardContainer"
import { NewCardContainer } from "./newCardContainer"
import { cardHolder } from "./states"

export function Board(){

    const [cardHolders, setCardHolders] = useState<cardHolder[]>([]) 

    const addCardHolder = (x: cardHolder) => {
        setCardHolders([...cardHolders, x])
    }

    return(
        <div className="w-fit flex gap-3 overflow-auto h-full p-1">
            {cardHolders.map(cardHolder => <CardContainer cardHolderState={cardHolder}/>)}
            <NewCardContainer addCardHolder = {addCardHolder}/>
        </div>
    )
}