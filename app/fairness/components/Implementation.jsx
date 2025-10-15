import React from 'react'

export const randomNumberData = {
  title: "Random Number Generation for Pack Openings",
  intro: `For each pack opened on OpenThatPack, a client seed, server seed, nonce, and digest index are used as input parameters for the random number generation function. This function utilizes the cryptographic hash function HMAC_SHA512 to generate secure bytes, which serve as the foundation for producing provably fair random outcomes for your pack openings.`,

  code: `// Random number generation for pack openings, based on serverSeed, clientSeed, nonce, and digestIndex

function generateRandomNumbers(ranges, serverSeed, clientSeed, nonce) {
  const crypto = require('crypto')
  const randomNumbers = [];
  const numbersPerDigest = 16;
  const digestsNeeded = Math.ceil(ranges.length / numbersPerDigest);

  for (let digestIndex = 0; digestIndex < digestsNeeded; digestIndex++) {
      const hmac = crypto.createHmac('sha512', serverSeed);
      hmac.update(\`\${clientSeed}:\${nonce}:\${digestIndex}\`);
      const digest = hmac.digest();
      let offset = 0;

      for (let i = 0; i < numbersPerDigest && randomNumbers.length < ranges.length; i++) {
          const range = ranges[randomNumbers.length];
          const bytes = digest.slice(offset, offset + 4);
          const num = bytes.readUInt32BE(0);
          const rand = Math.floor((num / 0x100000000) * (range.maxRange - range.minRange + 1)) + range.minRange;
          randomNumbers.push(rand);
          offset += 4;
      }
  }

  return randomNumbers;
}`,

  sections: [
    {
      heading: "Server Seed",
      text: `The server seed is a random 64-character hexadecimal string generated using crypto.randomBytes(32).toString('hex'). When you open a pack, we provide its SHA-256 hashed version (server seed hash) to you. This ensures that OpenThatPack cannot alter the server seed after it’s generated, and you cannot predict the results in advance. After opening a pack, you can reveal the unhashed server seed and verify it against the provided hash using our open-sourced verification tools, accessible via the fairness menu on our platform.`,
    },
    {
      heading: "Client Seed",
      text: `The client seed is your unique username or a custom input, ensuring you have influence over the randomness of the cards in your pack. Without this, the server seed alone would control the outcome, undermining fairness. You can customize your client seed through the profile settings at any time to generate a new chain of random outcomes, similar to choosing another pack at a physical store.`,
    },
    {
      heading: "Nonce",
      text: `The nonce is a timestamp-based value, formatted as SSMMHHDDMMYYYY, generated at the exact moment you open a pack (e.g., at 07:13 PM EDT on July 29, 2025, the nonce would be 13190729072025). This ensures that each pack opening produces a unique result, even with the same client and server seeds. If duplicate values occur within the same rarity tag, the nonce is incremented (using a custom date-time increment logic) to generate new random numbers.`,
    },
    {
      heading: "Digest Index (Incremental Number)",
      text: `We use 4 bytes of data from a 64-byte SHA-512 HMAC digest to generate a single random number for each card or rarity category in a pack. Since each digest provides 16 numbers (64 bytes / 4 bytes per number), we use a digest index (starting at 0) to generate additional digests when needed. For a standard pack opening, which requires 24 random numbers (corresponding to the 24 rarity ranges, later filtered to 11 cards), two digests are typically needed (digestIndex = 0 and 1). For special packs requiring more random numbers, additional digest indices ensure we can generate more outcomes without modifying the provably fair algorithm.`,
    },
  ],
};


const Implementation = () => {
 const { title, intro, code, sections } = randomNumberData;

  return (
    <section className="max-w-6xl mx-auto font-exo italic px-4 py-12 text-gray-300 space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>

      <p className="leading-relaxed">{intro}</p>

      <div className="bg-black/60 backdrop-blur-md rounded-lg p-6 border border-gray-700 overflow-x-auto">
        <pre className="text-sm text-gray-200 whitespace-pre">{code}</pre>
      </div>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold text-white">{section.heading}</h3>
            <p className="mt-2 leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Implementation
