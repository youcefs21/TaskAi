import internal from "stream";

export interface card{
    name: string;
    notes: string;
    timeElapsed: number;
    dueDate: Date;
    status: "active" | "break" | "completed" | "inactive";
    tags: tag[];
    estimatedTime: number;
} 

export interface tag{
    name: string;
    colour: string;
}

export interface cardHolder{
    title: string;
    colour: string;
    cards: card[];   
}