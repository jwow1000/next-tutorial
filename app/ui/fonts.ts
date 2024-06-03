import { Inter, Dangrek, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const dang = Dangrek({
  subsets: ['latin'], 
  display: 'swap', 
  weight:'400'
});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})