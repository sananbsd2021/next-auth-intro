import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import HeaderPage from "./components/Header";
import FooterPage from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAuth Tutorial',
  description: 'Learn NextAuth.js by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <HeaderPage />
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
          <FooterPage />
        </AuthProvider>
      </body>
    </html>
  )
}
