'use client';

import CustomNavbar from '../components/Navbar';
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import { Container, Grid } from '@mantine/core';

// Mock veri
const newProducts = [
  {
    id: '1',
    name: 'Beyaz Zambak ve Gerbera',
    price: '500',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5cdd463408a93217111334_xbpxkx.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  },
  {
    id: '2',
    name: 'Kırmızı Gül ve Beyaz Zambak',
    price: '650',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d84dc1a631b2292689077_nihv8m.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  },
  {
    id: '3',
    name: 'Papatya ve Gül',
    price: '700',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d19dc8cc0983744838000_xc256j.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  },
  {
    id: '4',
    name: 'Gül ve Zambak',
    price: '600',
    oldPrice: '750',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d84d46e1fe63737087781_eztymk.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  }
];

const relevantProducts = [
  {
    id: '5',
    name: 'Pembe ve Kırmızı Güller',
    price: '800',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d84d53800517236157520_awcivk.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  },
  {
    id: '6',
    name: 'Gül ve Zambak',
    price: '600',
    oldPrice: '750',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d84d46e1fe63737087781_eztymk.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  },
  {
    id: '7',
    name: 'Beyaz Zambak ve Gerbera',
    price: '500',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5cdd463408a93217111334_xbpxkx.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  },
  {
    id: '8',
    name: 'Kırmızı Gül ve Beyaz Zambak',
    price: '650',
    imageUrl: 'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d84dc1a631b2292689077_nihv8m.webp',
    imageStyle: { objectFit: 'contain', objectPosition: 'center' }
  }
];

export default function Home() {
  return (
    <CustomNavbar
      footer={<Footer />}
    >
      <Banner />
      
      <Container size="xl">
        <Grid gutter={30}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <CategoryCard 
              title="Hediyelik Ürünler" 
              subtitle="Sevdikleriniz için" 
              imageUrl="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1200,q_auto/cass23_gfwimt.png"
              link="/gifts"
              imageStyle={{ backgroundPosition: 'center center' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <CategoryCard 
              title="Saksı Çiçekleri" 
              subtitle="Evinizin en güzel köşesinde" 
              imageUrl="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1200,q_auto/cass31_esdbjz.png"
              link="/plants"
              imageStyle={{ backgroundPosition: 'center center' }}
            />
          </Grid.Col>
        </Grid>
      </Container>

      <ProductSection title="Yeni Ürünler" products={newProducts} />
      <ProductSection title="İlgili Ürünler" products={relevantProducts} isRelevant={true} />
    </CustomNavbar>
  );
}
