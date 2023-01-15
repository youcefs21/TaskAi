import { ActionIcon, Button, Input, Modal, MultiSelect } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconAt, IconLetterT, IconPlus} from "@tabler/icons";
import { useState } from "react";
import {TaskCard} from "./card";
import { card } from "./states";

interface props {
    opened:boolean;
    setOpened: (x:boolean)=> void;
    addCard: (x:card) =>void;
}

const initCard:card = {
    name:"",
    notes:"",
    timeElapsed:0,
    dueDate: null,
    status:"inactive",
    tags: [],
    estimatedTime: 0
}

export function NewTaskModal ({opened, setOpened, addCard}:props) {
    const [data, setData] = useState([
        { value: 'Hard', label: 'Hard' },
        { value: 'Easy', label: 'Easy' },
      ]);
      const [newCard,setNewCard] = useState<card>(initCard)
    return (
        <Modal opened={opened} onClose={() => setOpened(false)} title={"Add a new task"}>
                    <Input.Wrapper label="Task Name" required>
                    <Input
                        icon={<IconLetterT size = {15}/>}
                        placeholder="Choose Task Name"
                        onChange={(e)=>setNewCard({...newCard,
                            name: e.target.value
                        })}
                    />
                    </Input.Wrapper>
        
                    <DatePicker 
                    placeholder="Pick date" label="Due Date" withAsterisk
                    onChange = {(e) => setNewCard({...newCard, dueDate: e})} 
                    />
                    <Input.Wrapper label="Notes">
                    <Input
                        icon={<IconLetterT size = {15}/>}
                        placeholder="Write Any Notes Here..."
                        onChange = {(e) => setNewCard({...newCard, notes: e.target.value})}
                    />
                    </Input.Wrapper>
                    <MultiSelect
                        label="Creatable MultiSelect"
                        data={data}
                        placeholder="Select items"
                        searchable
                        creatable
                        getCreateLabel={(query) => `+ Create ${query}`}
                        onCreate={(query) => {
                            const item = { value: query, label: query };
                            setData((current) => [...current, item]);
                            return item;
                        }}
                        onChange = {(e) => setNewCard({...newCard, 
                            tags: e.map(tag => ({name:tag,colour:"blue"}))
                    })} 
                    />
                    <div className = "flex w-full justify-center">
                        <button className = "bg-fuchsia-600 text-white px-2 py-1 rounded mt-3 center"
                        onClick={()=>{
                            addCard(newCard)
                            setOpened (false)
                            }}>
                             Make Task! 
                             
                        </button>
                    </div>
                    
                    
                </Modal>
            
                
    )
}