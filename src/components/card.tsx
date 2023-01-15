import { Card, Image, Text, Badge, Button, Group, ActionIcon, Title, Checkbox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { card, tag } from './states';

function Taglist({tags}:{tags:tag[]}){
  return(
    <div className='w-[7.77rem] whitespace-nowrap overflow-auto scrollbar scrollbar-none'>
      {
      tags.map (tag => (
        <Badge color= {tag.colour} variant="light">
          {tag.name}
      </Badge>
      ))}
    </div>
  )
}

function NodeOptions () {
    return (
      <Group spacing = {"xs"}>
            <ActionIcon variant="default">
          <IconAdjustments size={18} />
        </ActionIcon>
      </Group>
    )
}

export function TaskCard({cardState, focused}: {cardState: card, focused: boolean}) {

  
  
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className={`w-full ${focused ? "bg-slate-300" : ""}`}>

      <div className='flex items-center justify-between'>
        {cardState.name}
        <Checkbox color = "teal"/>
      </div>
      <Text weight={500} color="dimmed">{cardState.countdown}</Text>

      <Text size="sm" align='left'>
        {cardState.notes}
      </Text>

      <Group position="apart">
        <Taglist tags={cardState.tags}/>
        
        <NodeOptions/>
      </Group>

    </Card>
  );
}