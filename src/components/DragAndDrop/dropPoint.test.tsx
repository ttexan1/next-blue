// import React from 'react';
// import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { findIndex, reOrderElements } from './index';
import { CELLHEIGHT, CELLMARGIN } from 'src/hooks/usePlaylist';

const diff = 2;
const netCellHeight = CELLHEIGHT+CELLMARGIN;
describe('functions test', () => {
  it('offset is 0 cellCount 1', () => {
    const cellCount = 1;
    const dropPoint = cellCount * netCellHeight - diff;
    const result = findIndex(dropPoint, 0, 10);
    expect(result).toStrictEqual(cellCount-1);
  });
  it('offset is 0 cellCount 2', () => {
    const cellCount = 2;
    const dropPoint = cellCount * netCellHeight - diff;
    const result = findIndex(dropPoint, 0, 10);
    expect(result).toStrictEqual(cellCount-1);
  });
  it('offset is 0', () => {
    const cellCount = 2.5;
    const dropPoint = cellCount * netCellHeight;
    const result = findIndex(dropPoint, 0, 10);
    expect(result).toStrictEqual(Math.trunc(cellCount));
  });
  it('offset is 20', () => {
    const cellCount = 2;
    const dropPoint = cellCount * netCellHeight;
    const result = findIndex(dropPoint, 20, 10);
    expect(result).toStrictEqual(cellCount);
  });
  it('result = maxIndex + 1', () => {
    const cellCount = 2;
    const dropPoint = cellCount * netCellHeight;
    const result = findIndex(dropPoint, 0, 0);
    expect(result).toStrictEqual(0);
  });
  // test reOrderElements
  it('reoder from < to', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6];
    const from = 2;
    const to = 6;
    const reOrdered = reOrderElements(arr, from, to);
    const expected = [0, 1, 3, 4, 5, 6, 2];
    for(let i=0; i<arr.length; i++){
      expect(reOrdered[i]).toStrictEqual(expected[i]);
    }
  });
  it('reoder from > to', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6];
    const from = 5;
    const to = 1;
    const reOrdered = reOrderElements(arr, from, to);
    const expected = [0, 5, 1, 2, 3, 4, 6];
    for(let i=0; i<arr.length; i++){
      expect(reOrdered[i]).toStrictEqual(expected[i]);
    }
  });
});

// export type ElementFactor = {
//   date: string;
//   screenId: number;
//   items: {
//     name: string;
//     duration: number;
//   }[];
// };

// export type ElementFactor2 = {
//   [key: string]: {//date
//     [key: number]: {//screenId
//       name: string;
//       duration: number;
//     }[];
//   };
// };

// const elementFactors: ElementFactor[] = [];
// for(let i=0; i < 1000; i++){
//   for(let j=0; j < 1000; j++){
//     elementFactors.push({
//       date: String(i),
//       screenId: j,
//       items: [{ name: `name${i-j}`, duration: 15 }],
//     });
//   }
// }
// const elementFactors2: ElementFactor2 = {};
// for(let i=0; i < 1000; i++){
//   for(let j=0; j < 1000; j++){
//     elementFactors2[String(i)] = { [j]: [{ name: `name${i-j}`, duration: 15 }] };
//   };
// }
// describe('functions test', () => {
//   it('ElementFactor2 structure', () => {
//     for(let i=0; i < 100000; i++){
//       const a = elementFactors2['500'][500];
//     }
//   });
//   it('ElementFactor structure', () => {
//     for(let i=0; i < 50; i++){
//       const a = elementFactors.find(ef => ef.date === '500' && ef.screenId === 500);
//     }
//   });
// });
