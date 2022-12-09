// function createCube(size: number) {
//     type B = (
//         s: number,
//         w:number,
//         sp:number) => string

//   const topWall = "/\\"
//   const bottomWall = "\\/"
//   const topSeparator = "_\\"
//   const bottomSeparator = "_/"
//   const repeater = (str: string, n: number) => str.repeat(n);
//   const topBuilder: B = (s,w,sp) =>  repeater(" ", s) + repeater(topWall,w) + repeater(topSeparator, sp)
//   const bottomBuilder: B = (s,w,sp) =>  repeater(" ", s) + repeater(topWall,w) + repeater(topSeparator, sp)
//   let topPart = "";
//   let bottomPart = "";
//   for (let i = size; i > 0; i--) {
//     topPart += topBuilder(i-1,size-i+1, size)
//        + "\n";
//     bottomPart +=
//       " ".repeat(size - i) + bottomWall(i) + bottomSeparator(size) + "\n";
//   }
//   const cubic = topPart + bottomPart.slice(0, -1);
//   return cubic;
// }

// console.log(createCube(1));
// console.log(createCube(2));
// console.log(createCube(4));
// console.log(createCube(10));
// console.log(createCube(0));
// console.log(createCube(-1));
// ^^ this code is WIP which scores below 80pts because of too long line :/
// below, after remove variables score is 160

function createCube(size: number) {
  type B = (s: number, w: number, sp: number) => string;
  const r = (str: string, n: number) => str.repeat(n);
  const tb: B = (s, w, sp) => r(" ", s) + r("/\\", w) + r("_\\", sp);
  const bBuilder: B = (s, w, sp) => r(" ", s) + r("\\/", w) + r("_/", sp);
  let topPart = "";
  let bottomPart = "";
  for (let i = size; i > 0; i--) {
    topPart += tb(i - 1, size - i + 1, size) + "\n";
    bottomPart += bBuilder(size - i, i, size) + "\n";
  }
  const cubic = topPart + bottomPart.slice(0, -1);
  return cubic;
}

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(4));
console.log(createCube(10));
console.log(createCube(0));
console.log(createCube(-1));

/**
   Score: 160
  356 ops/s (Higher is better)
  Cognitive complexity: (Lower is better)
   */
