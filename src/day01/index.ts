const gifts = ["cat", "game", "socks"];
function wrapping(gifts: string[]) {
  const wrappedGifts = gifts.map((gift) => {
    const giftA = `*${gift}*`;
    const giftLength = giftA.length;
    const wrappingTopAndBottom = "*".repeat(giftLength);
    return `${wrappingTopAndBottom}\n${giftA}\n${wrappingTopAndBottom}`;
  });
  return wrappedGifts;
}

console.log(wrapping(gifts));
/*
result: 
Score: 121
2,702 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)
 */
