// import Navbar from "../header/Nav";
// import { Footer } from "@/Pages/components/footer/footer.jsx";
// import Meta from "@/Pages/components/Meta.jsx";
"use client";

import "./home-new.css";
// import Faqs from "./Cmp/Faqs-how";
// import AnimCard from "../home/Cmp/AnimCard";
import { useEffect, useState } from "react";

export const faqSections = [
  {
    title: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        q: "How Does Virtual Pack Opening Work?",
        a: `Instead of opening sealed packs, we use a provably fair system to match their pull odds. 1.⁠ ⁠Pick a pack – Choose from Pokémon, Magic: The Gathering, and Yu-Gi-Oh! 2.⁠ ⁠Open instantly – Your cards are revealed instantly using real pack odds. 3.⁠ ⁠Keep or sell – Ship the cards you want or sell back the rest for credits or crypto.`,
      },
      {
        q: "How Do I Know This Is Legit?",
        a: `We understand skepticism around a new concept. Here’s what makes Open That Pack 100% transparent: •⁠ ⁠Real Pull Rates – We match the official odds of sealed packs. •⁠ ⁠Blockchain Verified – Every pull is recorded on Solana, proving fairness. •⁠ ⁠No Bulk Waste – Keep only what you want, sell back unwanted cards. •⁠ ⁠Guaranteed Condition – All shipped cards are stored securely in near-mint condition.`,
      },
      {
        q: "What Currency Is The Site Denominated In?",
        a: "All prices on Open That Pack are denominated in USD.",
      },
      {
        q: "How Fast Do You Ship Orders?",
        a: `We aim to get your order out the door as quickly as possible! Here’s what you can expect based on your order size: •⁠ ⁠1-10 within 5 days •⁠ ⁠11-50 within 10 days •⁠ ⁠51+ within 15 days •⁠ ⁠If you have a large amount of bulk we may add an extra 5 days depending on the quantity`,
      },
      {
        q: "How Fast Is Shipping?",
        a: "Once we ship out with UPS Express, you can expect delivery within 2-3 days.",
      },
    ],
  },
];

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [openId, setOpenId] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        if (!videoLoaded && window.scrollY > 100) {
          setVideoLoaded(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile, videoLoaded]);

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "OpenThatPack",
      url: "https://openthatpack.com",
      logo: "https://openthatpack.com/img/logo.png",
      description:
        "OpenThatPack is the #1 online pack opening experience for Pokemon, Magic: The Gathering (MTG), and Lorcana Collect real cards and enjoy the thrill of pack openings!",
      foundingDate: "2024-11-08",
      sameAs: [
        "https://www.instagram.com/open_that_pack",
        "https://www.youtube.com/@otp_openthatpack",
        "https://x.com/openthatpack",
        "https://www.tiktok.com/@otp_openthatpack",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "support@openthatpack.com",
          contactType: "customer service",
          url: "https://openthatpack.com/contact-us",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="bg-[#04002B] font-exo">
        <div className="bg-[#04002b] relative overflow-hidden ">
          <div className="container mx-auto">
            <section className="md:px-0 px-5 md:flex flex-wrap items-center !my-5 hm-banner !font-exo ">
              <img
                src="https://openthatpack.com/assets/howitworks-banner.png"
                className="mb-d"
              />
              <img
                src="https://openthatpack.com/assets/images/home/mb-banner.png"
                className="mb-b"
              />

              <div className="txt !font-exo">
                <h1>
                  HOW OPEN THAT PACK
                  <br />
                  WORKS?
                </h1>
                <p className="!font-exo">
                  Opening, selling, or shipping cards has never been easier.
                  Check out our How It Works page to see how simple it is to
                  collect with OpenThatPack!
                </p>
              </div>
            </section>

            <section className="md:px-0 px-5 !my-5 hm-lng-crd">
              <div className="flex flex-col md:flex-row justify-between gap-6 hstart">
                <div className="w-full md:w-[48%]  p-4 rounded">
                  <img
                    className="pt-2 pb-3"
                    src="	https://openthatpack.com/img/hbutton.png"
                    alt=""
                  />
                  <h3 className="">START WITH QUICK & EASY SIGNUP!</h3>
                  <p className="">
                    One click sign-up, no hassle - no wasted time. Everything
                    quick and easy.
                  </p>
                </div>
                <div className="w-full md:w-[48%]  p-4 rounded">
                  <img
                    className="pt-2 pb-3"
                    src="	https://openthatpack.com/img/hbutton2.png"
                    alt=""
                  />
                  <h3 className="!font-exo">DEPOSIT TO BUY PACKS OR BOXES</h3>
                  <p className="!font-exo">
                    Once you log in, click the + next to the P Coin, select
                    debit/credit card or crypto, and deposit your funds.
                  </p>
                </div>
              </div>
            </section>

            <section className="container ">
              <div className="!font-teko work">
                <div className="item">
                  <img
                    className="p-3"
                    src="	https://openthatpack.com/assets/images/home/work1.png"
                    alt=""
                  />
                  <div className="txt ">
                    <h2>Pick a Pack or Box</h2>
                    <p>
                      Choose from Pokémon, Magic: The Gathering, and Lorcana
                      packs. We use the same odds as physical packs—just fully
                      digital!
                    </p>
                  </div>
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/1.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/work2.png"
                    alt=""
                  />
                  <div className="txt">
                    <h2>Open Instantly</h2>
                    <p>
                      Click to reveal your cards with real pull rates from
                      sealed packs. Every opening is recorded on the Solana
                      blockchain for transparency.
                    </p>
                  </div>
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/2.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/work4.png"
                    alt=""
                  />
                  <div className="txt">
                    <h2>Sell Unwanted Cards or Duplicates</h2>
                    <p>
                      Don’t want to keep spares? Already own some? Instantly
                      sell any unwanted cards straight from your inventory.
                    </p>
                  </div>
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/3.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/work3.png"
                    alt=""
                  />
                  <div className="txt">
                    <h2>Ship What You Want</h2>
                    <p>
                      Withdraw the cards you want anytime, and we’ll ship them
                      straight to your door—safe, fast, and trackable.
                    </p>
                  </div>
                  <img
                    className="p-3"
                    src="https://openthatpack.com/assets/images/home/4.png"
                    alt=""
                  />
                </div>
              </div>
            </section>

            <section className=" px-5 ">

              <h1 className="text-center text-white uppercase font-extrabold tracking-wider text-2xl sm:text-3xl my-8 md:my-10">
                Frequently Asked Questions
              </h1>
              {faqSections.map((section, sIdx) => (
                <section key={sIdx} className="mb-8">
                  {sIdx === 0 ? null : (
                    <h2 className="sr-only">{section.title}</h2>
                  )}

                  <div className="space-y-4">
                    {section.faqs.map((faq, fIdx) => {
                      const id = `${sIdx}-${fIdx}`;
                      const open = openId === id;

                      return (
                        <div
                          key={id}
                          data-open={open}
                          className="group rounded-2xl bg-[#171A28]/90 border border-white/10 shadow-[0_1px_0_rgba(255,255,255,.06),0_6px_20px_rgba(0,0,0,.35)] backdrop-blur
                               hover:bg-[#1B2031]/90 transition-colors"
                        >
                          {/* Header */}
                          <button
                            onClick={() => setOpenId(open ? null : id)}
                            aria-expanded={open}
                            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-white"
                          >
                            <span className="text-lg md:text-xl font-semibold">
                              {faq.q}
                            </span>

                            {/* Chevron icon that rotates */}
                            <svg
                              className={`shrink-0 h-6 w-6 transition-transform duration-300 ${
                                open ? "rotate-180" : "rotate-0"
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.174l3.71-2.944a.75.75 0 111.06 1.06l-4.24 3.365a.75.75 0 01-.94 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          {/* Smooth content: grid-rows trick for auto-height + fade */}
                          <div
                            className={`grid transition-all duration-500 ease-out ${
                              open
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="px-5 pb-4 text-sm md:text-base text-white/90 whitespace-pre-line">
                                {faq.a}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
