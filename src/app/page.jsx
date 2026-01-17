import Banner from "@/components/Home/Banner";
import Category from "@/components/Home/Category";
import Features from "@/components/Home/Features";
import FAQ from "@/components/Home/FQA";
import Newsletter from "@/components/Home/Newsletter";
import PopularItems from "@/components/Home/PopularItems";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (

    <div className=" mx-auto">
 <Banner></Banner>
 <Features></Features>
 <Category></Category>
 <PopularItems></PopularItems>
 <Testimonials></Testimonials>
 <FAQ></FAQ>
 <Newsletter></Newsletter>
    </div>
  );
}

