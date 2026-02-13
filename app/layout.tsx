import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drew - IT Professional & Developer',
  description: 'IT professional specializing in automation, infrastructure, and development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white min-h-screen">
        <nav className="fixed top-0 w-full bg-secondary/90 backdrop-blur-md z-50 border-b border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Drew</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
              <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}