const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  let giftWeight = 0;
  let weightLimit = 0;
  for (const gift of packOfGifts) {
    giftWeight += gift.length;
  }
  for (const reindeer of reindeers) {
    weightLimit += reindeer.length * 2;
  }

  return Math.floor(weightLimit / giftWeight);
}

console.log(distributeGifts([], reindeers));

/*
Score: 128
3,054 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)
 */
