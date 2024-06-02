import Image from "next/image";

export default function FormulaBharat() {
  const projectBharatImages = [
    "back-1",
    "front-1",
    "front-2",
    "side-1",
    "side-expo",
    "top-expo",
    // "side-2",
  ];
  return (
    <div className="w-full mx-auto">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-200  dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              FORMULA BHARAT 2025
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the future of Indian motorsports with our cutting-edge
              formula-style vehicle design.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
          {projectBharatImages.map((design, i) => (
            <Image
              key={i}
              src={`/project_bharat_2025_Designs/${design}.png`}
              alt="Formula Bharat 2025 Design "
              width={600}
              height={400}
              className="rounded-lg object-cover hover:scale-[1.02] transition-all duration-300"
            />
          ))}
        </div>
      </section>
      {/* Costs Starts */}
      <div className="container py-12 md:py-20 lg:py-24">
        <h1 className="text-3xl font-bold mb-6">Cost Breakdown</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Chassis</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div>Frame</div>
              <div className="text-right">90k</div>
              <div>Suspension System</div>
              <div className="text-right">400k</div>
              <div>Steering System</div>
              <div className="text-right">40k</div>
              <div>Miscellaneous</div>
              <div className="text-right">150k</div>
            </div>
          </div>
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Brakes and Wheels</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div>Tyres with rim</div>
              <div className="text-right">200k</div>
              <div>Brakes system</div>
              <div className="text-right">55k</div>
              <div>Wheel Hub</div>
              <div className="text-right">20k</div>
              <div>Consumables</div>
              <div className="text-right">50k</div>
            </div>
          </div>
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Powertrain</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div>Battery & BMS</div>
              <div className="text-right">500k</div>
              <div>Motors and Controllers</div>
              <div className="text-right">500k</div>
              <div>Electrical System</div>
              <div className="text-right">300k</div>
              <div>Drivetrain</div>
              <div className="text-right">300k</div>
            </div>
          </div>
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Logistics</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div>Travel Expenses</div>
              <div className="text-right">180k</div>
              <div>Shipping</div>
              <div className="text-right">200k</div>
              <div>Food and Lodging</div>
              <div className="text-right">100k</div>
              <div>Participating</div>
              <div className="text-right">150k</div>
            </div>
          </div>
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Composites</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div>Glass Fibers & resin</div>
              <div className="text-right">47k</div>
              <div>Carbon Fiber</div>
              <div className="text-right">49k</div>
              <div>Mold</div>
              <div className="text-right">30k</div>
              <div>Paint & graph</div>
              <div className="text-right">55k</div>
              <div>Miscellaneous</div>
              <div className="text-right">15k</div>
            </div>
          </div>
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Safety Equipments</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div>Riding Gears</div>
              <div className="text-right">150k</div>
              <div>PPE</div>
              <div className="text-right">50k</div>
              <div>Driver Harness</div>
              <div className="text-right">5k</div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center pb-10">
          <h2 className="text-2xl font-bold">Estimated Total Cost</h2>
          <p className="text-4xl font-bold">36.5L</p>
        </div>
      </div>
    </div>
  );
}