export interface SearchTextInterface {
    code: number;
    status: string;
    data: Data;
  }
  
  export interface Data {
    count: number;
    matches: Match[];
  }
  
  export interface Match {
    number: number;
    text: string;
    edition: Edition;
    surah: Surah;
    numberInSurah: number;
  }
  
  export interface Surah {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
  }
  
  export interface Edition {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    type: string;
  }