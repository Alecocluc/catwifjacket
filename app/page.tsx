import { Button } from "@/components/ui/button"
import { Cat, Wallet } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { AboutSection } from "@/components/about-section"
import { CreateYourCatSection } from "@/components/create-your-cat-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e5ddd3] text-[#1a1a1a]">
      <header className="fixed top-0 w-full z-50 bg-[#e5ddd3]/80 backdrop-blur-sm border-b border-[#1a1a1a]/10">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Cat className="w-8 h-8" />
            <span className="magazine-title text-xl">$CWJ</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="magazine-title text-sm hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="magazine-title text-sm hover:text-primary transition-colors">About</Link>
            <Link href="#create" className="magazine-title text-sm hover:text-primary transition-colors">Create</Link>
          </nav>

          <Button variant="outline" className="md:hidden">
            <Wallet className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(229, 221, 211, 0.7), rgba(229, 221, 211, 0.8)), url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg")',
            }}
          />
          
          <div className="container relative z-10 px-4 py-32 text-center">
            <h1 className="magazine-title text-6xl md:text-8xl font-black mb-6 tracking-wider">
              Cat Wif Jacket
              <span className="block text-[#1a1a1a] mt-2 text-4xl md:text-5xl font-bold tracking-widest">$CWJ</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-[#1a1a1a]/80 font-light">
              Jackets stay on
            </p>

            <div className="relative w-full max-w-md mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Cat Wif Jacket"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
                priority
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="min-w-[200px] bg-[#1a1a1a] hover:bg-[#1a1a1a]/90 text-white magazine-title" 
                asChild
              >
                <a href="https://pump.fun/coin/D3y8cyMykVbgQJRGnCAayNXkvRZy1C4qotqytFFupump" target="_blank" rel="noopener noreferrer">
                  Buy Now
                </a>
              </Button>
              
              <div className="bg-[#1a1a1a]/5 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm font-mono">Contract Address:</p>
                <p className="text-xs font-mono text-[#1a1a1a]">
                  D3y8cyMykVbgQJRGnCAayNXkvRZy1C4qotqytFFupump
                </p>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <CreateYourCatSection />

        <section className="bg-[#1a1a1a]/5 py-24">
          <div className="container px-4">
            <h2 className="magazine-title text-3xl font-bold text-center mb-12">Why Cat Wif Jacket?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a]/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Community Driven</h3>
                <p className="text-[#1a1a1a]/80">Join our growing community of cat lovers and crypto enthusiasts</p>
              </div>
              
              <div className="bg-[#1a1a1a]/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Unique Design</h3>
                <p className="text-[#1a1a1a]/80">Each cat is uniquely styled with the coolest jackets on Solana</p>
              </div>
              
              <div className="bg-[#1a1a1a]/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Fair Launch</h3>
                <p className="text-[#1a1a1a]/80">No pre-sale, no team tokens, 100% fair distribution</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-8">
        <div className="container px-4 text-center">
          <p className="magazine-title text-sm">© 2024 Cat Wif Jacket</p>
          <p className="mt-2 text-white/60">
            Built with 😺 on Solana
          </p>
        </div>
      </footer>
    </div>
  )
}

