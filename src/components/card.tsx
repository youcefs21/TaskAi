import { Card, Image, Text, Badge, Button, Group, ActionIcon, Title, Checkbox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';
import { useEffect, useState } from 'react';

function Taglist(){
  return(
    <Group spacing={"xs"}>
      <Badge color="pink" variant="light">
        Hard
      </Badge>
      <Badge color="green" variant="light">
        easy
      </Badge>
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

export function TaskCard() {

    const [timer,setTimer] = useState(0)

    useEffect(() => {
        const x = setInterval(() => 
            setTimer(t => t+1),
        1000)

        return () => clearInterval(x)
    }, [])


  return (
    <Card shadow="sm" p="lg" radius="md" withBorder w = {300}>

      <div className='flex items-center justify-between'>
        Clac assignment
        <Checkbox color = "teal"/>
      </div>
      <Text weight={500} color="dimmed">00:10:23</Text>

      <Text size="sm">
        a bunch of text
      </Text>

      <Group position="apart">
        <Taglist/>
        
        <NodeOptions/>
      </Group>

    </Card>
  );
}