import { Box, Container, Group, Stack, Text, SimpleGrid, UnstyledButton } from '@mantine/core';
import { IconBrandInstagram, IconBrandWhatsapp, IconBrandFacebook } from '@tabler/icons-react';
import classes from './styles.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box className={classes.footer}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
          <Box>
            <Text fw={600} mb="md">Bizi Takip Edin</Text>
            <Box mb="sm">
              <Text size="sm" mb={5}>0246 999 99 99</Text>
              <Group gap="md">
                <UnstyledButton>
                  <IconBrandInstagram size={20} />
                </UnstyledButton>
                <UnstyledButton>
                  <IconBrandWhatsapp size={20} />
                </UnstyledButton>
                <UnstyledButton>
                  <IconBrandFacebook size={20} />
                </UnstyledButton>
              </Group>
            </Box>
          </Box>
          
          <Box>
            <Text fw={600} mb="md">Help</Text>
            <Stack gap={10}>
              <UnstyledButton component={Link} href="/contact" className={classes.footerLink}>
                İletişim
              </UnstyledButton>
              <UnstyledButton component={Link} href="/delivery" className={classes.footerLink}>
                Teslimat
              </UnstyledButton>
              <UnstyledButton component={Link} href="/payment" className={classes.footerLink}>
                Ödeme
              </UnstyledButton>
              <UnstyledButton component={Link} href="/customer-service" className={classes.footerLink}>
                Müşteri Hizmetleri
              </UnstyledButton>
              <UnstyledButton component={Link} href="/faq" className={classes.footerLink}>
                SSS
              </UnstyledButton>
            </Stack>
          </Box>
          
          <Box>
            <Text fw={600} mb="md">Hakkımızda</Text>
            <Stack gap={10}>
              <UnstyledButton component={Link} href="/stores" className={classes.footerLink}>
                Hikayemiz
              </UnstyledButton>
              <UnstyledButton component={Link} href="/flower-care" className={classes.footerLink}>
                Çiçek Bakımı
              </UnstyledButton>
              <UnstyledButton component={Link} href="/sitemap" className={classes.footerLink}>
                Site Haritası
              </UnstyledButton>
            </Stack>
          </Box>
          
          <Box>
            <Text fw={600} mb="md">Yasal</Text>
            <Stack gap={10}>
              <UnstyledButton component={Link} href="/privacy" className={classes.footerLink}>
                Gizlilik Politikası
              </UnstyledButton>
              <UnstyledButton component={Link} href="/terms" className={classes.footerLink}>
                Şartlar ve Koşullar
              </UnstyledButton>
              <UnstyledButton component={Link} href="/cookie" className={classes.footerLink}>
                Çerez Politikası
              </UnstyledButton>
            </Stack>
          </Box>
        </SimpleGrid>
        
        <Box className={classes.copyright}>
          <Text size="xs" c="dimmed">
            © Copyright {new Date().getFullYear()}. Developed by Triz Global
          </Text>
        </Box>
      </Container>
    </Box>
  );
} 