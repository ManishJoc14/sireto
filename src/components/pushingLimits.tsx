import Image from "next/image";

export default function PushingLimits() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8D7DA]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pushing Limits, Chasing Victory
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore the passion and dedication behind our {"team's"} success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center justify-between">
              <Image src="/passionDriven.png" alt="Passion" width={190} height={190} className="rounded-full" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Passion Driven</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Relentless Pursuit</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <Image src="/innovativeMind.png" alt="Innovative" width={180} height={180} className="rounded-full" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Innovative Minds</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pushing Boundaries</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <Image src="/collaborative.png" alt="Collaborative" width={120} height={120} className="rounded-full" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Collaborative Spirit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Synergy in Action</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <Image src="/ResilientDetermination.png" alt="Resilient" width={180} height={180} className="rounded-full" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Resilient Determination</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Overcoming Challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }