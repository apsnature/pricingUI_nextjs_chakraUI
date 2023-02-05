'use client';
//import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Header from './Header';
import Price from './Price';
import Offers from './Offers';

export default function Home() {
  return (
    <ChakraProvider >
     <Header />
     <Price />
     <Offers />
     
     </ChakraProvider>
  )
}
