// import React from 'react';

export const CELLHEIGHT = 120;
export const CELLMARGIN = 6;
export const TITLEHEIGHT = 80;

export type ElementFactor = {
  date: string;
  screenId: number;
  items: {
    name: string;
    duration: number;
  }[];
};

export type ElementFactor2 = {
  [key: string]: {//date
    [key: number]: {//screenId
      name: string;
      duration: number;
    }[];
  };
};

