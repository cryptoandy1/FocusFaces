import './globals.css'

export const metadata = {
  title: 'Andrey Rublev | Web Developer',
  description:
    'Web developer creating responsive and interactive web applications (websites) open to work and freelance',
  keywords:
    'andrey rublev, web development, react, three.js, programmer, responsive design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
