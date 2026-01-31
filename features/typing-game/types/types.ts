export type ActiveWordWithIndex = {
    wordIndex: number;
    wordDetail: {
      word: ReturnType<() => string>;
      indexFrom: number;
      indexTo: number;
    };
  };
  export type CharStatus = { char: string; charColor: string };
  export type WordStatus = { word: string; indexFrom: number; indexTo: number };
  export type Data = [WordStatus[], CharStatus[], { CursorPosition: number }];
  export type wordsStatus = WordStatus[];
  export type StatisticsItem = { round: number; wpm: number; accuracy: number };
  export type Statistics = StatisticsItem[];