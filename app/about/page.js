import Image from "next/image";
import { Star, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[450px] w-full">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <Image
          src="/Assets/aboutbackground.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Our Story
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Crafting Excellence Since 2024
            </h2>
            <p className="text-gray-600 mb-4">
              At Wallet Shop, we believe that a wallet is more than just an
              accessory - it's statement of style and a companiion for life's
              journey. Our passion for quality craftsmanship and timeless design
              drives everything we do.
            </p>
            <p className="text-gray-600 mb-4">
              Each wallet in our collection is carefully craftedusing premium
              materials and traditional techniques, ensuring durability and
              elegance that stands the test of time.
            </p>
            <p className="text-gray-600 mb-4">
              We're commited to sustainable practices and ethical, making sure
              that every product we create not only looks good but also does
              good. that every product we create not{" "}
            </p>
          </div>
          <div className="relative h-[440px]">
            <Image
              src="/Assets/creater-img.png"
              alt="Crafting Process"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center  border-2 border-gray-300/40 p-8 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, using only the finest materials
                and craftsmanship
              </p>
            </div>
            <div className="text-center  border-2 border-gray-300/40 p-8 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg ">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing boundaries to create unique and dunctional
                designs.
              </p>
            </div>
            <div className="text-center  border-2 border-gray-300/40 p-8 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg ">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>

              <p className="text-gray-600">
                Committed to eco-friendly practices and respondible sourcing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
