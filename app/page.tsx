import Image from "next/image";
import bgImg from "@/asset/images/pattern-background-desktop.svg";
import bgMobileImg from "@/asset/images/pattern-background-mobile.svg";
import heroImage from "@/asset/images/illustration-hero.svg";
import musicIcon from "@/asset/images/icon-music.svg";

import { red_Hat_Display } from "@/utils/fonts";

export default function Home() {
  return (
    <div className=" bg-pale-blue min-h-screen flex items-center justify-center relative">
      {/* Desktop Background Image */}
      <Image
        className="hidden sm:flex w-full h-auto absolute top-0 left-0
        "
        src={bgImg}
        alt="bg-img"
      />
      {/* Mobile background Image */}
      <Image
        className="sm:hidden w-full h-auto absolute top-0 left-0"
        src={bgMobileImg}
        alt="bg-img-mobile"
      />

      {/* main */}

      <main className="absolute max-w-[320px] rounded-xl overflow-hidden bg-white ">
        <Image src={heroImage} alt="hero-img"></Image>
        <section
          className={`flex flex-col items-center text-center px-5 pt-9 pb-8 gap-7 ${red_Hat_Display.className}`}
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-dark-blue text-[26px]">
              Order Summary
            </h2>
            <p className="text-desaturated-blue font-semibold text-sm">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>

            {/* icon, detail, change */}

            <section className="flex bg-very-pale-blue justify-between w-full items-center rounded-lg px-4 py-4 text-sm">
              <div className="flex gap-3">
                <Image src={musicIcon} alt="icon-music" />
                <div className="flex  flex-col h-fit">
                  <h3 className="text-dark-blue font-bold">Annual Plan</h3>
                  <p className="text-desaturated-blue font-medium">
                    $59.99/year
                  </p>
                </div>
              </div>
              <button className="font-medium text-bright-blue underline hover:opacity-90 hover:no-underline">
                Change
              </button>
            </section>
          </div>

          {/* buttons */}

          <div className="flex flex-col gap-5 w-full">
            <button
              className="font-bold bg-bright-blue text-very-pale-blue text-sm w-full
               py-3 rounded-lg shadow-xl hover:opacity-80"
            >
              Proceed to Payment
            </button>
            <button className="text-sm font-bold text-desaturated-blue hover:text-dark-blue">
              Cancel Order
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
