import React from "react";


const colorIDs = ['green', 'red', 'blue'] as const;

type ColorID = typeof colorIDs[number];

export const colorLabels: Record<ColorID, string> = {
  green: 'Green',
  red: 'Red',
  blue: 'bg-blue text-white',
} as const;

type Props = {
  children?: React.ReactNode;
  [padding: number]: 12 | 32;
  color: typeof colorLabels[ColorID]
};

function Button({ children , color}: Props) {
  return <button className={color}>{children}</button>;
}

export default Button;
