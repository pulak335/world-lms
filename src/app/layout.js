import './globals.css'
import { Providers } from './providers'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'LMS Frontend',
  description: 'Learning Management System Frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
