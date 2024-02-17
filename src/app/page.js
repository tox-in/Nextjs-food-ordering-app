import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tempor nisl. Morbi fermentum elit vel ultricies imperdiet. Sed et imperdiet erat, bibendum mollis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.Lorem nulla est proident.
        </p>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.Lorem nulla est proident.
        </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'} />
        <div className="mt-8">
        <a href="tel:+250790732408" className="text-4xl mt-8 underline text-gray-500">+250 790 732 408</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reselved
      </footer>
    </>
  );
}
