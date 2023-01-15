import { Card, Image, Text, Badge, Button, Group, ActionIcon, Title, Checkbox } from '@mantine/core';
import { card } from './states';

export function ActiveCard (activeCard:card) {
    return (
        <div className="bg-slate-200">
            <Text>{activeCard.name}</Text>
        </div>
    )
}