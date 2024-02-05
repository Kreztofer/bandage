import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from './redux/provider';
import ToasterProvider from './providers/ToasterProvider';
import {
  Container,
  FooterMain,
  FooterRights,
  Navbar,
  TopNav,
} from './components';

const font = Montserrat({
  subsets: ['latin'],
  weight: '300',
});
export const metadata: Metadata = {
  title: 'Bandage',
  description: 'The Home Of Amazing Stuffs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={font.className}>
        <ToasterProvider />
        <ReduxProvider>
          <Navbar />
          <TopNav />
          {children}
          <Container>
            <FooterMain />
          </Container>
          <FooterRights />
        </ReduxProvider>
      </body>
    </html>
  );
}
