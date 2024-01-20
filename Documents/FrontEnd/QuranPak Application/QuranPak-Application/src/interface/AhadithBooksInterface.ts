export interface AhadithBooksInterface {
    status: number;
    message: string;
    books: Book[];
  }
  
  export interface Book {
    id: number;
    bookName: string;
    writerName: string;
    aboutWriter?: string;
    writerDeath: string;
    bookSlug: string;
    hadiths_count: string;
    chapters_count: string;
  }