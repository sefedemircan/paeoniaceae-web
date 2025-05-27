import { Box, Text, Group } from '@mantine/core';
import classes from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ name, price, oldPrice, imageUrl, id, imageStyle = {}, isRelevant = false }) {
  const defaultStyle = { 
    objectFit: 'contain',
    objectPosition: 'center',
    ...imageStyle 
  };

  const imageClassName = isRelevant ? classes.relevantProductImage : classes.image;

  return (
    <Link href={`/product/${id}`} className={classes.cardLink}>
      <Box className={classes.card}>
        <Box className={classes.imageContainer}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={defaultStyle}
            className={imageClassName}
          />
        </Box>
        <Box className={classes.content}>
          <Text fw={500} size="sm" className={classes.name}>
            {name}
          </Text>
          <Group gap={10} wrap="nowrap">
            <Text fw={600} size="sm" className={classes.price}>
               {price}₺
            </Text>
            {oldPrice && (
              <Text size="xs" c="dimmed" td="line-through" className={classes.oldPrice}>
                {oldPrice}₺
              </Text>
            )}
          </Group>
        </Box>
      </Box>
    </Link>
  );
} 