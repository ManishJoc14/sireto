import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <div className="overflow-hidden rounded-lg lg:col-span-3">
          <Image src="/team.png" alt="Team" width={1200} height={1000} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl py-4">Meet Our Shireto Team</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a dynamic student-led group of motorsport enthusiasts from various disciplines within the
              Thapathali Campus. We aim to conceptualise, fabricate, and compete in Formula International events with
              {"Nepal's"} first Formula E car. Our primary objective is to establish ourselves as a prominent competitor in
              the global motorsport scene while concurrently promoting and nurturing the motorsport culture in Nepal.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-start py-8">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-brandPrimary px-10 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-rose-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-rose-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md border border-rose-200 bg-white px-10 mx-2 text-sm font-medium shadow-sm transition-colors hover:bg-rose-100 hover:text-rose-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}