const falsyBoxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

const trulyBoxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

const smallBoxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];

type Box = {
  l: number;
  w: number;
  h: number;
};

function fitsInOneBox(boxes: Box[]) {
  const getBoxCapacity = (box: Box): number => box.h * box.l * box.w;

  const sb = boxes.sort(
    (boxA, boxB) => getBoxCapacity(boxB) - getBoxCapacity(boxA)
  );

  for (let i = 0; i < sb.length - 1; i++) {
    const a = sb[i];
    const b = sb[i + 1];
    if (a.w <= b.w || a.h <= b.h || a.l <= b.l) return false;
  }

  return true;
}

console.log(fitsInOneBox(trulyBoxes));

/*
Score: 10
2,632 ops/s (Higher is better)
Cognitive complexity: 3(Lower is better)
Detected a line length of 85. Your code is hard to read.
 */
