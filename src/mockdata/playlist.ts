import { ElementFactor } from 'src/hooks/usePlaylist';

const makeData = (month: number) => {
  const array = [] as ElementFactor[];
  let counter = 0;
  for(let i=1; i<=7; i ++ ) {
    for (let j=1; j<= 100; j++) {
      array.push({ date: `${month}-${i}`, screenId: j, items: [] });
      for (let k=1; k <= 8; k++) {
        array[counter].items.push({ name: `要素${j}-${k}`, duration: 10 });
      }
      counter+=1;
    }
  }
  return array;
};
export const playlistData = [
  ...makeData(12),
  // ...makeData(1),
  // ...makeData(2),
  // ...makeData(3),
  // ...makeData(4),
];
