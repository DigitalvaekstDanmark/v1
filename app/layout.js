import './globals.css'

export const metadata = {
  title: 'Digital Vækst Danmark – Din digitale vækstpartner',
  description: 'Vi hjælper danske virksomheder med at vokse online med webudvikling, SEO og digital markedsføring.',
  keywords: 'webudvikling, SEO, digital markedsføring, hosting, Danmark',
  openGraph: {
    title: 'Digital Vækst Danmark – Din digitale vækstpartner',
    description: 'Vi hjælper danske virksomheder med at vokse online med webudvikling, SEO og digital markedsføring.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
