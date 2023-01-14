import { Card, Image, Text, Badge, Button, Group, ActionIcon, Title } from '@mantine/core';
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
      <Text>Calc Assignment</Text>
      <Text size="sm" color="dimmed">
        Calculus 
      </Text>
      <Text weight={"100%"} fz="xl" ta="center">00:10:23</Text>

      <Group position="apart" mb="xs">
        <Group spacing={"xs"}>
          <Badge color="pink" variant="light">
            Hard
          </Badge>
          <Badge color="green" variant="light">
            easy
          </Badge>
        </Group>

        <ActionIcon variant="default">
          <IconAdjustments size={18} />
        </ActionIcon>
      </Group>


    </Card>
  );
}