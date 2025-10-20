"use client";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "GENERAL QUESTIONS",
    faqs: [
      {
        q: "What is Open That Pack?",
        a: "Open That Pack is a digital platform where you can open real trading card packs online at lower prices. We use the same pull odds as sealed packs, ensuring fairness while eliminating retail markup and unwanted bulk cards.",
      },
      {
        q: "How Does Virtual Pack Opening Work?",
        a: `Instead of opening sealed packs, we use a provably fair system to match their pull odds.\n\n1. Pick a pack – Choose from Pokémon, Magic: The Gathering, and Lorcana\n2. Open instantly – Your cards are revealed instantly using real pack odds.\n3. Keep or sell – Ship the cards you want or sell back the rest for credits.`,
      },
      {
        q: "Why Are Your Packs Cheaper?",
        a: "We don’t have retail store costs or excess packaging. This allows us to offer packs at lower prices while guaranteeing near-mint condition cards.",
      },
      {
        q: "How Do I Know This Is Legit?",
        a: `We understand skepticism around a new concept. Here’s what makes Open That Pack 100% transparent:\n\n- Real Pull Rates – We match the official odds of sealed packs.\n- Blockchain Verified – Every pull is recorded on Solana, proving fairness.\n- No Bulk Waste – Keep only what you want, sell back unwanted cards.\n- Guaranteed Condition – All shipped cards are stored securely in near-mint condition.`,
      },
      {
        q: "What Currency Is The Site Denominated In?",
        a: "All prices on Open That Pack are denominated in USD.",
      },
    ],
  },
  {
    title: "SHIPPING & TRADE-BACK",
    faqs: [
      {
        q: "How Do I Get My Cards?",
        a: "Choose which cards you want shipped, and we’ll send them to your door. Shipping is free for orders over 100 credits; a flat shipping fee applies otherwise.",
      },
      {
        q: "What If I Don’t Like My Cards?",
        a: "Unlike retail packs, you can sell back unwanted cards instantly for credits.",
      },
      {
        q: "Can I Buy Single Cards?",
        a: "No, we only sell packs and boxes. However, you can sell back unwanted cards for credits.",
      },
      {
        q: "How Fast Do You Ship Orders?",
        a: `Most orders ship out sooner than the estimated times, we provide these estimates as a worst-case scenario:\n\n• 1–10 cards: Within 5 business days\n• 11–50 within 10 days\n• 51+ within 15 days\n• If you have a large amount of bulk we may add an extra 5 days depending on the quantity`,
      },
      {
        q: "How Fast Is Shipping?",
        a: "Once we ship out with UPS Express, you can expect delivery within 2-3 days.",
      },
      {
        q: "Can I place multiple orders even if my initial order hasn’t been delivered yet?",
        a: "Yes, you can! If you place a second order before your first order has been shipped, we will automatically merge the two (and any additional orders placed afterward) into a single shipment. The processing time will be adjusted based on the total number of cards across all combined orders, and the delivery timeline will reset based on your most recent order.",
      },
      {
        q: "Which Countries Do You Ship To?",
        a: `We ship to all locations except those UPS doesn't permit, which are:\n\n- Afghanistan\n- Belarus\n- Brunei Darussalam\n- Gaza Strip\n- Lebanon\n- North Korea\n- Russian Federation\n- Syrian Arab Republic\n- Tajikistan\n- Ukraine\n- Yemen`,
      },
      {
        q: "Why is there a bulk surcharge?",
        a: "Orders with over 50 bulk cards include a $0.10 surcharge per bulk card beyond the first 50. This covers the extra labor and shipping costs involved in packing large volumes. Bulk cards are regular Common and Uncommon cards, everything else is not considered bulk.",
      },
    ],
  },
  {
    title: "FAIRNESS & SECURITY",
    faqs: [
      {
        q: "Is Pack Opening Fair?",
        a: "Yes! We replicate real pack odds with blockchain-backed randomness. Every pull is verifiable, ensuring no manipulation.",
      },
      {
        q: "What Happens If You Run Out of Inventory?",
        a: "If a card is out of stock, that pack will be unavailable until we restock, ensuring fairness.",
      },
      {
        q: "How Can I Contact Support?",
        a: "We're available 24/7 via live chat or at support@openthatpack.com.",
      },
    ],
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    sections.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, 1400 + index * 100);
    });
  }, []);

  // Starry background effect (unchanged)
  useEffect(() => {
    const createStars = () => {
      const container = containerRef.current;
      if (!container) return;
      container.querySelectorAll(".star").forEach(star => star.remove());

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.position = "absolute";
        star.style.width = "1px";
        star.style.height = "1px";
        star.style.backgroundColor = "white";
        star.style.borderRadius = "50%";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        container.appendChild(star);
      }
    };
    createStars();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen no-scrollbar font-exo relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/qualityCards/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="min-h-screen text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, sIndex) => (
            <div key={sIndex}>
              <h2 className="text-2xl text-center md:text-3xl font-extrabold mb-6 tracking-wide">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.faqs.map((faq, index) => {
                  const currentIndex = Number(`${sIndex}${index}`);
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg border border-white/20 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : currentIndex)
                        }
                        className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
                      >
                        <span>{faq.q}</span>
                        <span className="text-xl">{isOpen ? "−" : "+"}</span>
                      </button>

                      <div
                        className={`px-4 text-sm text-white/90 transition-all duration-500 ease-in-out ${
                          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="whitespace-pre-line">{faq.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}