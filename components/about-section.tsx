import Image from "next/image"

export function AboutSection() {
  const memeImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-15_15-50-10.jpg-c5wtbZL59dZ24oR1OwhNk6szCyQkYb.jpeg",
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#e5ddd3] to-[#d5cdc3]">
      <div className="container px-4">
        <h2 className="magazine-title text-4xl font-bold text-center mb-8">About Cat Wif Jacket</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-[#1a1a1a]/80">
          Cat Wif Jacket ($CWJ) is more than just a meme coin – it's a movement. Born from the 
          creativity of the Solana community, our feline friends are here to make crypto fun again. 
          With their stylish jackets and cool attitudes, these cats are taking over the blockchain 
          one purr at a time.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {memeImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Cat Wif Jacket Meme ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

