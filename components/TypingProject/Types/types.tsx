export type ActiveWordWithIndex = {
  wordIndex: number;
  wordDetail: {
    word: string;
    indexFrom: number;
    indexTo: number;
  };
} | null;

export interface CharStatus {
  char: string;
  charColor: string;
}

export interface WordStatus {
  word: string;
  indexFrom: number;
  indexTo: number;
}

export interface CursorState {
  CursorPosition: number;
}

export type Data = [WordStatus[], CharStatus[], CursorState];
export type wordsStatus = WordStatus[];
export type Statistics = { round: number; wpm: number; accuracy: number }[];