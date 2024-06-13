/* eslint-disable react/no-unescaped-entities */
import Photo from "@/components/Photo";
import PageTransition from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <PageTransition />
      <section className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="text-accent">Novebrian Setya Purwanto</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus dolorem vel hic deserunt eos, unde illum quasi
                reiciendis esse exercitationem dolores adipisci aut, animi,
                facilis sit ipsum! Iusto, iure minus?
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download My CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0" />
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
