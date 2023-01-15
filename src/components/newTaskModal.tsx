import { ActionIcon, Button, Input, Modal, MultiSelect } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconAt, IconLetterT, IconPlus} from "@tabler/icons";
import { useState } from "react";
import {TaskCard} from "./card";
import { card } from "./states";

interface props {
    opened:boolean;
    setOpened: (x:boolean)=> void;
}

export function NewTaskModal ({opened, setOpened}:props) {
    const [data, setData] = useState([
        { value: 'Hard', label: 'Hard' },
        { value: 'Easy', label: 'Easy' },
      ]);

    return (
        <Modal opened={opened} onClose={() => setOpened(false)} title={"Add a new task"}>
                    <Input.Wrapper label="Task Name" required>
                    <Input
                        icon={<IconLetterT size = {15}/>}
                        placeholder="Choose Task Name"
                    />
                    </Input.Wrapper>
        
                    <DatePicker placeholder="Pick date" label="Due Date" withAsterisk />
                    <Input.Wrapper label="Notes">
                    <Input
                        icon={<IconLetterT size = {15}/>}
                        placeholder="Write Any Notes Here..."
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
                    />
                    <div className = "flex w-full justify-center">
                        <button className = "bg-fuchsia-600 text-white px-2 py-1 rounded mt-3 center"
                        onClick={()=>setOpened (false)}>
                             Make Task! 
                             
                        </button>
                    </div>
                    

                </Modal>
            
                
    )
}