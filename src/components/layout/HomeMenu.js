import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute h-full left-0 right-0 justify-start w-full">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
        <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
        <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-3">Check out</h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg text-center">
           <img src="/pizza.png" alt="pizza"/> 
           <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
           <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
           <button className="bg-primary text-white rounded-full px-8 py-2">Add to cart $12</button>
        </div>
      </div>
    </section>
  );
}
