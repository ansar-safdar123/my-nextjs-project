import React from 'react'

export const conversationData = {
  title: "Bytes to Floats",
  intro: `The output of the random number generation process (from generateRandomNumbers) is derived from a 64-byte HMAC_SHA512 digest. As described in the digest index implementation, we use 4 bytes of data to generate a single random number for each rarity category. Each set of 4 bytes is converted to an unsigned 32-bit integer using big-endian byte order (bytes.readUInt32BE(0)), which is then scaled to produce a number within the specified range for that category (e.g., 1–72 for Common, 1–13 for rare1). The scaling formula is:`,

  code: `const rand = Math.floor((num / 0x100000000) * (range.maxRange - range.minRange + 1)) + range.minRange;`,

  extraText: `This ensures high precision and uniformity in the randomness used for pack openings. The following code snippet illustrates how bytes are converted to scaled numbers for pack ranges:`,

  codeSnippet: `// Convert digest bytes to scaled numbers for pack ranges
function generateScaledNumbers({ serverSeed, clientSeed, nonce, ranges }) {
  const crypto = require('crypto');
  const scaledNumbers = [];
  const numbersPerDigest = 16;
  const digestsNeeded = Math.ceil(ranges.length / numbersPerDigest);

  for (let digestIndex = 0; digestIndex < digestsNeeded; digestIndex++) {
    const hmac = crypto.createHmac('sha512', serverSeed);
    hmac.update(\`\${clientSeed}:\${nonce}:\${digestIndex}\`);
    const digest = hmac.digest();
    let offset = 0;

    for (let i = 0; i < numbersPerDigest && scaledNumbers.length < ranges.length; i++) {
      const range = ranges[scaledNumbers.length];
      const bytes = digest.slice(offset, offset + 4);
      const num = bytes.readUInt32BE(0);
      const scaled = Math.floor((num / 0x100000000) * (range.maxRange - range.minRange + 1)) + range.minRange;
      scaledNumbers.push(scaled);
      offset += 4;
    }
  }

  return scaledNumbers;
}`,

  sections: [
    {
      heading: "Numbers to Pack Outcomes",
      text: `The random numbers generated are mapped to specific cards or outcomes within each rarity category (e.g., Common, Uncommon, Rare, Super Rare, Legendary, and foil variants). Each number is already scaled to fit within the possible outcomes for its respective rarity range. These scaled numbers correspond to specific items within the category, as defined by the game’s card database.`,
    },
    {
      heading: "Uniqueness of Pack Items",
      text: `To ensure that outcomes within the same rarity category are not duplicated in a single pack, we track seen values for each rarity tag using a Set. If a generated number results in a duplicate value, the system increments the nonce by 1 second to generate a new SHA-512 HMAC digest and obtain a new number.`,
      code: `// Handling duplicates by incrementing nonce
while (seenValues[tag].has(finalNumber.toString())) {
  nonceOffset++;
  const newNonce = incrementNonce(nonce, nonceOffset);
  const hmac = crypto.createHmac('sha512', serverSeed);
  hmac.update(\`\${clientSeed}:\${newNonce}\`);
  const digest = hmac.digest();
  const bytes = digest.slice(0, 4);
  const newNum = bytes.readUInt32BE(0);
  finalNumber = Math.floor((newNum / 0x100000000) * (maxRange - minRange + 1)) + range.minRange;
}`,
    },
    {
      heading: "Verification",
      text: `All pack openings on OpenThatPack are fully verifiable. After opening a pack, you receive the server seed, client seed, nonce, and the generated random numbers. You can verify the fairness of the results using the open-sourced verifyOutcome function, which recomputes the random numbers and checks for a match.`,
    },
  ],
};


const Conversation = () => {
  const { title, intro, code, extraText, codeSnippet, sections } = conversationData;

  return (
    <section className="max-w-6xl mx-auto font-exo italic px-4 py-12 text-gray-300 space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>

      <p className="leading-relaxed">{intro}</p>

      <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-gray-700 overflow-x-auto">
        <pre className="text-sm text-gray-200 whitespace-pre">{code}</pre>
      </div>

      <p className="leading-relaxed">{extraText}</p>

      <div className="bg-black/60 backdrop-blur-md rounded-lg p-6 border border-gray-700 overflow-x-auto">
        <pre className="text-sm text-gray-200 whitespace-pre">{codeSnippet}</pre>
      </div>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold text-white">{section.heading}</h3>
            <p className="mt-2 leading-relaxed">{section.text}</p>

            {section.code && (
              <div className="mt-4 bg-black/60 backdrop-blur-md rounded-lg p-6 border border-gray-700 overflow-x-auto">
                <pre className="text-sm text-gray-200 whitespace-pre">{section.code}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conversation
