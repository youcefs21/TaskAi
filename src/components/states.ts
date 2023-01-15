

export interface card{
    name: string;
    notes: string;
    tick: number;
    timeElapsed: number;
    dueDate: Date | null;
    dueTime: Date | null;
    countdown: string;
    status: "active" | "break" | "completed" | "inactive";
    group: string;
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