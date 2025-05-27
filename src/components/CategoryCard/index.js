import { Box, Text, Group, UnstyledButton } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './styles.module.css';
import Link from 'next/link';

export default function CategoryCard({ title, subtitle, imageUrl, link, imageStyle = {} }) {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    ...imageStyle
  };

  return (
    <Box className={classes.card} style={cardStyle}>
      <Box className={classes.content}>
        <Text fw={600} size="xl" className={classes.title}>
          {title}
        </Text>
        <Text size="sm" c="dimmed" className={classes.subtitle}>
          {subtitle}
        </Text>
        <UnstyledButton 
          component={Link} 
          href={link}
          className={classes.viewButton}
        >
          <Group gap={8}>
            <span>Görüntüle</span>
            <IconArrowRight size={18} />
          </Group>
        </UnstyledButton>
      </Box>
    </Box>
  );
} 