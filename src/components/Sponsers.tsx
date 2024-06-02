import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  } from "@/components/ui/carousel";
  import Image from "next/image";
  
  export default function Sponsers() {
    const sponsers = [
      "Altair",
      "Doro",
      "GolchhaGroup",
      "Neoteric",
      "SolidWorks",
    ]
    return (
      <section className="w-full py-16 md:py-28 lg:py-36">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Sponsors
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trusted by the best companies in the industry.
            </p>
          </div>
          <Carousel className="w-full max-w-6xl py-5">
            <CarouselContent>
              {sponsers.map((sponser, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 bg-rose-50 mx-3 rounded-lg py-6 flex justify-center">
                  <Image
                    src={`/sponser/${sponser}.jpg`}
                    width={200}
                    height={100}
                    alt="featured Logo"
                    className="aspect-[2/1] mix-blend-multiply overflow-hidden rounded-lg object-contain object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    );
  }
  