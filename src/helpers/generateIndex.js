export default function generateIndex() {
  let index;
  do {
    index = Math.floor(100000 * Math.random())
      .toString()
      .slice(0, 6);
  } while (index.toString().length < 5);
  return index;
}
