export interface BookParams {
  author: string;
  country: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  genres?: string[];
}