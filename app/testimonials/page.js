"use client";
import { useState, useEffect } from "react";
import testimonialsData from "../data/testimonials.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Quote,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [visibleStats, setVisibleStats] = useState(false);
  const [counts, setCounts] = useState({
    customers: 0,
    rating: 0,
    satisfaction: 0,
  });

  const finalCounts = {
    customers: testimonialsData.testimonials.length,
    rating: parseFloat(
      (
        testimonialsData.testimonials.reduce(
          (acc, curr) => acc + curr.rating,
          0
        ) / testimonialsData.testimonials.length
      ).toFixed(1)
    ),
    satisfaction: 100,
  };

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !visibleStats) {
          setVisibleStats(true);

          const duration = 1500;
          const startTime = Date.now();

          const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts({
              customers: Math.floor(progress * finalCounts.customers),
              rating: parseFloat((progress * finalCounts.rating).toFixed(1)),
              satisfaction: Math.floor(progress * finalCounts.satisfaction),
            });

            if (progress === 1) clearInterval(interval);
          }, 16);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleStats]);

  return (
    <div className="min-h-screen ">
      <div className="relative h-[500px] w-full overflow-hidden ">
        <div className="absolute inset-0 bg-secondary z-0" />
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')] z-0" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl  text-white/90 max-w-2xl text-center"
          >
            Don't just take our word for it - see why customers around the world
            trust our solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="mt-4 bg-white text-secondary px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90">
              View all reviews <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[50px] z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6  lg:px-8 py-24 relative -mt-10 z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900  mb-4">
            Featured Reviews
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 bg-secondary text-white p-8 lg:p-12 flex items-center justify-center">
                  <div>
                    <Quote className="w-16 h-16 mb-6 text-primary opacity-50" />
                    <div className="text-2xl font-medium italic mb-8">
                      "This solution completely transformed our business
                      operations. The team's support is unmatched in the
                      industry.
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="font-bold text-xl">Sarah Thompson</div>
                    <div className="text-primary">CEO, Innovate Tech</div>
                  </div>
                </div>
                <div className="lg:3/5 p-6 lg:p-12">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Why Our Customers Choose Us
                      </h3>
                      <ul className="space-y-7  py-4">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 bg-primary p-1 rounded-full">
                            <ChevronRight className="w-4 h-4 text-secondary" />
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">
                              Exceptional Support
                            </span>
                            <p className="text-gray-600 ">
                              Our dedicated team is available 24/7 to assist
                              with any questions.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 bg-primary p-1 rounded-full">
                            <ChevronRight className="w-4 h-4 text-secondary" />
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">
                              {" "}
                              Innovative Solutions
                            </span>
                            <p className="text-gray-600 ">
                              Cutting-edge technology that evolves with your
                              business needs.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 bg-primary p-1 rounded-full">
                            <ChevronRight className="w-4 h-4 text-secondary" />
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">
                              Proven Results
                            </span>
                            <p className="text-gray-600 ">
                              Our customers report an average 40% increase in
                              efficiency.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Button className="">Read full story</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="my-20 pt-30">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center ">
            {" "}
            Customer Testimonials
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            See what our customers have to say about their experience working
            with us.
          </p>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              api?.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialsData.testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card
                      className={`h-full transition-all duration-300 ${
                        activeIndex === index
                          ? "border-primary/60  shadow-xl  scale-105"
                          : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                      }`}
                    >
                      <CardContent className="flex flex-col items-start gap-4 p-6 md:p-8">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/60 shadow-md">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-800">
                              {testimonial.name}
                            </div>
                            <div className="text-gray-500 text-sm">
                              {testimonial.profession}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm font-medium text-gray-600">
                            {testimonial.rating}.0
                          </span>
                        </div>

                        <div className="text-gray-700 text-base relative">
                          <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-2 opacity-50 " />
                          <div className="pl-5">{testimonial.text}</div>
                        </div>

                        <div className="text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100 w-full">
                          {new Date(testimonial.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious
                className="relative border border-primary/60 bg-white text-primary hover:bg-blue-50 transition-colors"
                icon={<ChevronLeft className="w-5 h-5" />}
              />
              <div className="flex gap-1.5 items-center">
                {testimonialsData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const carouselInstance = document.querySelector(
                        '[data-carousel="container"]'
                      )._embla;
                      if (carouselInstance) {
                        carouselInstance.scrollTo(index);
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-primary w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <CarouselNext
                className="relative border border-primary/60 bg-white text-primary hover:bg-blue-50 transition-colors"
                icon={<ChevronRight className="w-5 h-5" />}
              />
            </div>
          </Carousel>
        </div>

        <div className="mt-32 mb-16">
          <div className="bg-secondary rounded-3xl p-10 md:p-16 relative overflow-hidden ">
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-[1.7rem] font-semibold text-white mb-4">
                  Ready to experience what our customers love?
                </h2>
                <p className="text-white/90 text-md mb-8 md:mb-0">
                  Jooin thousands of satisfied customers who have transformed
                  their business with our solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-secondary px-8 py-4 rounded-md font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                  Get Started Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
