import { store } from '@/store/store'
import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/utils/Providers'
import { Navbar } from '@/components/Navbar'

// import { Provider } from 'react-redux'
// import { Navbar } from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'The Shoe Shop ',
  description: 'A beautiful Shoe Shop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
     
     {children}
        </Providers>
      </body>
    </html>
  )
}
