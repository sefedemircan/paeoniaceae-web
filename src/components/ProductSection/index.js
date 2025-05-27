import { Box, Text, Container, Group, SimpleGrid, UnstyledButton } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import classes from './styles.module.css';
import ProductCard from '../ProductCard';

export default function ProductSection({ title, products, imageStyle = {}, isRelevant = false }) {
  return (
    <Box mb={60}>
      <Container size="xl">
        <Group justify="space-between" mb={30}>
          <Text className={classes.sectionTitle}>{title}</Text>
          <Group gap={20}>
            <UnstyledButton className={classes.navButton}>
              <IconArrowLeft size={18} />
            </UnstyledButton>
            <UnstyledButton className={classes.navButton}>
              <IconArrowRight size={18} />
            </UnstyledButton>
          </Group>
        </Group>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing={30}>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.imageUrl}
              imageStyle={product.imageStyle || imageStyle}
              isRelevant={isRelevant}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 