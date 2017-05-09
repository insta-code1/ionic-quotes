export interface Quote {
  id: string;
  person: string;
  text: string;
}


export interface QuoteCollection {
    category: string;
    quotes: Quote[];
    icon: string;
}