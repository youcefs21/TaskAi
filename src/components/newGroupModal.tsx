import { ActionIcon, Button, Input, Modal, MultiSelect } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconAt, IconLetterT, IconPlus} from "@tabler/icons";
import { useState } from "react";
import {TaskCard} from "./card";
import { card, cardHolder } from "./states";

interface props {
    opened:boolean;
    setOpened: (x:boolean)=> void;
    addCardHolder: (x:cardHolder) =>void;
}

const initCardHolder:cardHolder = {
    title:"",
    colour:"",
    cards:[]
}

export function NewGroupModal ({opened, setOpened, addCardHolder}:props) {
    const [data, setData] = useState([
        { value: 'Hard', label: 'Hard' },
        { value: 'Easy', label: 'Easy' },
      ]);
      const [newCardHolder,setNewCardHolder] = useState<cardHolder>(initCardHolder)
    return (
        <Modal opened={opened} onClose={() => setOpened(false)} title={"Add a Section"}>
                    <Input.Wrapper label="Section Name" required>
                    <Input
                        icon={<IconLetterT size = {15}/>}
                        placeholder="Choose Section Name"
                        onChange={(e)=>setNewCardHolder({...newCardHolder,
                            title: e.target.value
                        })}
                    />
                    </Input.Wrapper>
                    <div className = "flex w-full justify-center">
                        <button className = "bg-fuchsia-600 text-white px-2 py-1 rounded mt-3 center"
                        onClick={()=>{
                            addCardHolder(newCardHolder)
                            setOpened (false)
                            }}>
                             Make Section! 
                             
                        </button>
                    </div>
                    
                    
                </Modal>
            
                
    )
}