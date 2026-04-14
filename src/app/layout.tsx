import '@/src/shared/ui/global.css';
import { inter } from '@/src/shared/ui/fonts';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}