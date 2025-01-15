import { Button } from "@/components/ui/button"

export function CreateYourCatSection() {
  return (
    <section id="create" className="py-24 bg-gradient-to-b from-[#d5cdc3] to-[#e5ddd3]">
      <div className="container px-4 text-center">
        <h2 className="magazine-title text-4xl font-bold mb-8">Create Your Cat</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-[#1a1a1a]/80">
          Get ready to design your own unique Cat Wif Jacket! Our custom cat creator is coming soon, 
          allowing you to mix and match jackets, accessories, and more.
        </p>
        <Button 
          size="lg" 
          disabled 
          className="magazine-title bg-[#1a1a1a] hover:bg-[#1a1a1a]/90"
        >
          Coming Soon
        </Button>
      </div>
    </section>
  )
}

