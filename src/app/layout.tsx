'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata, Poppins, Roboto } from 'next/font/google'

const inconsolata = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Mama.AI',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inconsolata.className}>
      <body className='animate-fade-right animate-once animate-normal bg-black-700 '>
        {children}
      </body>
    </html>
  )
}
