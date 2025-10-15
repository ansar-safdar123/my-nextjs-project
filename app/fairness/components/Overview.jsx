import React from 'react'

// /data/overviewData.js
export const overviewData = [
  {
    title: "Ensuring Trust with OpenThatPack",
    content: [
      "At OpenThatPack, we prioritize transparency and fairness in every pack opening. Our provably fair system ensures that every result is verifiable and unmanipulated, giving you confidence in the authenticity of your pack openings. This is achieved through a combination of a commitment scheme and cryptographic hashing techniques."
    ],
  },
  {
    title: "Commitment Scheme",
    content: [
      "Your input as a user, along with the time of your pack opening, directly influences the outcome. By incorporating your unique client seed (username) and a time-based nonce, you contribute to the randomness and uniqueness of the results, ensuring a fair and personalized experience."
    ],
  },
  {
    title: "Cryptographic Hashing",
    content: [
      "We utilize industry-standard cryptographic hashing algorithms (SHA-256 and SHA-512) to ensure that our server seed remains secure and tamper-proof. This creates a trustless environment where neither OpenThatPack nor the user can manipulate the outcomes. In simple terms, the fairness of your pack opening can be expressed as :Fair Result = OpenThatPack’s Input (Hashed Server Seed) + Your Input (Client Seed) + Time-Based Nonce"
    ],
  },
  {
    title: "How It Works",
    list: [
      {
        label: "Server Seed:",
        text: "When your pack is opened, we generate a random server seed using crypto.randomBytes(32).toString('hex'). We provide its SHA-256 hashed version (server seed hash) to you, ensuring the seed cannot be altered after the fact."
      },
      {
        label: "Client Seed:",
        text: "You provide a unique client seed (your username), which directly influences the randomization process, giving you control over the outcome."
      },
      {
        label: "Nonce:",
        text: "A timestamp-based nonce, formatted as SSMMHHDDMMYYYY (seconds, minutes, hours, day, month, year), is generated at the exact time of the pack opening. This ensures that the outcome is unique to the moment you open the pack, further securing the process."
      },
      {
        label: "Outcome Generation:",
        text: "Using the provided code’s logic, we combine the server seed, client seed, and nonce through an SHA-512 HMAC to generate random numbers. These numbers are mapped to predefined rarity ranges (e.g., Common, Uncommon, Rare, Super Rare, Legendary, and foil variants) to determine the cards in your pack. The system ensures no duplicate values within the same rarity tag by incrementing the nonce if necessary."
      },
      {
        label: "Verification:",
        text: "After the pack is opened, you can verify the results using the server seed, client seed, nonce, and the open-sourced verification logic. This ensures the outcome matches the reported results."
      }
    ]
  }
];



const Overview = () => {
  return (
    <div className="text-white max-w-6xl mx-auto font-exo italic px-4 md:px-10 py-12 leading-relaxed">
      {overviewData.map((section, index) => (
        <div key={index} className="mb-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            {section.title}
          </h2>

          {/* Paragraphs */}
          {section.content &&
            section.content.map((para, i) => (
              <p key={i} className="text-gray-300 mb-4">
                {para}
              </p>
            ))}

          {/* Bullet List (if present) */}
          {section.list && (
            <ul className="list-disc list-outside space-y-3 text-gray-300 ">
              {section.list.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-100">
                    {item.label}{" "}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Overview;

