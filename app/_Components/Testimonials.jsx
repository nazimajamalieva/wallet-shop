import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jacob Jones",
    profession: "Photographer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Vlillage did removed enjoyed explain not han saw calling talking. ",
  },
  {
    name: "Emily Clark",
    profession: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Absolutely wonderful! I am so pleased with the service. Nightly recommended.",
  },
  {
    name: "Michael Lee",
    profession: "Developer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 4,
    text: "Greet experience overall. Will definitely use again.",
  },
  {
    name: "Sophia Turner",
    profession: "Writer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Exceeded my expectations in every way. Thank you!",
  },
  {
    name: "David Kim",
    profession: "Artist",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 4,
    text: "Very professional and creative. Loved the results!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-200/40">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center space-y-4 pb-12 md:pb-16">
          <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
            "What Our Customers Say"
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what our valued clients have to say about their experiences
            with our services
          </p>
        </div>

        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-[95%] mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2 md:p-4">
                  <Card>
                    <CardContent className="flex flex-col items-start gap-4 p-6 md:p-8">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover bg-yellow-200"
                        />
                        <div>
                          <div className="text-lg md:text-xl font-bold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm md:text-base text-gray-500">
                            {testimonial.profession}
                          </div>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span
                                key={i}
                                className="text-yellow-400 text-base md:text-xl"
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm md:text-base text-gray-700">
                        {testimonial.text}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
