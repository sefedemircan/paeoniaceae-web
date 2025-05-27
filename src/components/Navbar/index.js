import { 
  AppShell, 
  Group, 
  UnstyledButton, 
  Container, 
  Burger, 
  Text,
  Stack,
  Box
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMapPin, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './styles.module.css';

const navItems = [
  { label: 'Çiçek Buketleri', href: '/flowers' },
  { label: 'Saksı Çiçekleri', href: '/plants' },
  { label: 'Hediyelik Ürünler', href: '/gifts' },
  { label: 'Kampanyalar', href: '/discounts' },
  { label: 'Hakkımızda', href: '/about' },
];

export default function CustomNavbar({ children, footer }) {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <AppShell
        header={{ height: { base: 60, md: 80 } }}
        navbar={{
          width: 280,
          breakpoint: 'md',
          collapsed: { mobile: !opened, desktop: true }
        }}
        padding="md"
        style={{ backgroundColor: 'white' }}
      >
        <AppShell.Header style={{ backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
          <Container size="xl" h="100%">
            {/* Desktop Header */}
            <Group justify="space-between" align="center" h="100%" className={classes.desktopHeader}>
              <Group>
                <UnstyledButton component={Link} href="/" className={classes.locationButton}>
                  <Group gap={5} align="center">
                    <IconMapPin size={16} />
                    <Text size="sm" fw={500} c="black">Isparta</Text>
                  </Group>
                </UnstyledButton>
              </Group>

              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text fw={700} size="xl" ta="center" c="black">
                  CASSIOPEIA
                </Text>
              </Link>

              <Group>
                <UnstyledButton className={classes.iconButton}>
                  <IconSearch size={20} color="black" />
                </UnstyledButton>
                <UnstyledButton className={classes.iconButton}>
                  <IconShoppingCart size={20} color="black" />
                </UnstyledButton>
              </Group>
            </Group>

            {/* Mobile Header */}
            <Group justify="space-between" align="center" h="100%" className={classes.mobileHeader}>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="sm"
                color="#333"
              />
              
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text fw={700} size="lg" ta="center" c="black">
                  CASSIOPEIA
                </Text>
              </Link>
              
              <Box w={30}></Box> {/* Spacer for centering */}
            </Group>
          </Container>

          {/* Desktop Navigation Bar */}
          <Box className={classes.desktopNavbar}>
            <Container size="xl">
              <Group justify="center" gap={40}>
                {navItems.map((item) => (
                  <UnstyledButton
                    key={item.href}
                    component={Link}
                    href={item.href}
                    className={classes.navLink}
                  >
                    {item.label}
                  </UnstyledButton>
                ))}
              </Group>
            </Container>
          </Box>
        </AppShell.Header>

        <AppShell.Navbar p="md" style={{ backgroundColor: 'white' }}>
          <Stack gap={0}>
            {navItems.map((item) => (
              <UnstyledButton
                key={item.href}
                component={Link}
                href={item.href}
                className={classes.mobileNavLink}
                onClick={close}
              >
                {item.label}
              </UnstyledButton>
            ))}
            
            <Box className={classes.mobileLocation}>
              <Group gap={5} justify="center">
                <IconMapPin size={16} color="#666" />
                <Text size="sm" fw={500} c="#666">Isparta</Text>
              </Group>
            </Box>
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          {children}
        </AppShell.Main>
      </AppShell>
      
      {/* Footer AppShell dışında - tam genişlik için */}
      {footer}
    </>
  );
} 