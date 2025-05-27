import { Geist, Geist_Mono } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript, mantineHtmlProps, createTheme } from '@mantine/core';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  primaryColor: 'gray',
  fontFamily: 'var(--font-geist-sans)',
  defaultColorScheme: 'light',
  colorScheme: 'light',
  white: '#ffffff',
  black: '#000000',
  colors: {
    gray: [
      '#f8f9fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529',
      '#000000'
    ]
  }
});

export const metadata = {
  title: "Paeoniaceae - Çiçek ve Bitki Mağazası",
  description: "Taze çiçekler ve bitkiler için en iyi seçim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" {...mantineHtmlProps} data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
