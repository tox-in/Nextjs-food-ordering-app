import Image from "next/image";
import MenuItem from "../menu/menuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 justify-start w-full">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
        <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
        <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className="text-center">
        <SectionHeaders subHeader={'check out'} mainHeader={'Menu'}/>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </section>
  );
}
