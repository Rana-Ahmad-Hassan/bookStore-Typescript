export interface ManzilInterface {
    code: number;
    status: string;
    data: Data;
  }
  
  export interface Data {
    number: number;
    ayahs: Ayah[];
    surahs: Surahs;
    edition: Edition;
  }
  
  export interface Edition {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    format: string;
    type: string;
    direction: string;
  }
  
  export interface Surahs {
    '50': Surah;
    '51': Surah;
    '52': Surah;
    '53': Surah;
    '54': Surah;
    '55': Surah;
    '56': Surah;
    '57': Surah;
    '58': Surah;
    '59': Surah;
    '60': Surah;
    '61': Surah;
    '62': Surah;
    '63': Surah;
    '64': Surah;
    '65': Surah;
    '66': Surah;
    '67': Surah;
    '68': Surah;
    '69': Surah;
    '70': Surah;
    '71': Surah;
    '72': Surah;
    '73': Surah;
    '74': Surah;
    '75': Surah;
    '76': Surah;
    '77': Surah;
    '78': Surah;
    '79': Surah;
    '80': Surah;
    '81': Surah;
    '82': Surah;
    '83': Surah;
    '84': Surah;
    '85': Surah;
    '86': Surah;
    '87': Surah;
    '88': Surah;
    '89': Surah;
    '90': Surah;
    '91': Surah;
    '92': Surah;
    '93': Surah;
    '94': Surah;
    '95': Surah;
    '96': Surah;
    '97': Surah;
    '98': Surah;
    '99': Surah;
    '100': Surah;
    '101': Surah;
    '102': Surah;
    '103': Surah;
    '104': Surah;
    '105': Surah;
    '106': Surah;
    '107': Surah;
    '108': Surah;
    '109': Surah;
    '110': Surah;
    '111': Surah;
    '112': Surah;
    '113': Surah;
    '114': Surah;
  }
  
  export interface Ayah {
    number: number;
    text: string;
    surah: Surah;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: Sajda | boolean;
  }
  
  export interface Sajda {
    id: number;
    recommended: boolean;
    obligatory: boolean;
  }
  
  export interface Surah {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
    numberOfAyahs: number;
  }