export type NewCard = {
  title: string;
  text: string;
  hasSeparator?: boolean;
} | null;

export type NewCardList = NewCard[];
