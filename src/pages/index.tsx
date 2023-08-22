import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from 'components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-red-600">
        Hola Q Hace
      </div>
    </main>
  )
}
