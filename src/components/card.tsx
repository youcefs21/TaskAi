import { Card, Image, Text, Badge, Button, Group, ActionIcon, Title, Checkbox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { card, tag } from './states';

function Taglist({tags}:{tags:tag[]}){
  return(
    <Group spacing={"xs"}>
      {
      tags.map (tag => (
        <Badge color= {tag.colour} variant="light">
          {tag.name}
      </Badge>
      ))}
    </Group>
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

export function TaskCard({cardState}: {cardState: card}) {

    const [timer,setTimer] = useState(0)

    useEffect(() => {
        const x = setInterval(() => 
            setTimer(t => t+1),
        1000)

        return () => clearInterval(x)
    }, [])
  
  
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className={'w-full'}>

      <div className='flex items-center justify-between'>
        {cardState.name}
        <Checkbox color = "teal"/>
      </div>
      <Text weight={500} color="dimmed">00:10:23</Text>

      <Text size="sm">
        {cardState.notes}
      </Text>

      <Group position="apart">
        <Taglist tags={cardState.tags}/>
        
        <NodeOptions/>
      </Group>

    </Card>
  );
}