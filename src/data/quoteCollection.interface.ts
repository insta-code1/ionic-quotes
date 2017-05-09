export interface Quote {
    id: number;
    person: string;
    text: string;
}

export interface QuoteCollection {
    category: string;
    quotes: Quote[];
    icon: string;
}