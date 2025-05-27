import { Box, Text, Container, Button, Stack } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './styles.module.css';

export default function Banner() {
  return (
    <Container size="xl" className={classes.bannerContainer}>
      <Box className={classes.banner}>
        <Stack className={classes.textContent}>
          <Text className={classes.title}>
            20% İNDİRİM
          </Text>
          <Text className={classes.subtitle}>
            Çiçek buketlerinde ve hediyelik ürünlerde 20% indirim!
          </Text>
          <Button 
            variant="filled" 
            className={classes.button}
            rightSection={<IconArrowRight size={18} />}
          >
            Alışverişe başla
          </Button>
        </Stack>
      </Box>
    </Container>
  );
} 