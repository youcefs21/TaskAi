import { Card, Image, Text, Badge, Button, Group, ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';
import { useEffect, useState } from 'react';


export function TaskCard() {

    const [timer,setTimer] = useState(0)

    useEffect(() => {
        const x = setInterval(() => 
            setTimer(t => t+1),
        1000)

        return () => clearInterval(x)
    }, [])


  return (
    <Card shadow="sm" p="lg" radius="md" withBorder w = {350}>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{timer}</Text>
        <Badge color="pink" variant="light">
          Hard (Coded Tag)
        </Badge>
      </Group>


      <Text size="sm" color="dimmed">
        Calculus 
      </Text>

      <ActionIcon variant="default">
      <IconAdjustments size={18} />
    </ActionIcon>
    </Card>
  );
}