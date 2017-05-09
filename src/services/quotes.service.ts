import { Quote } from './../data/quoteCollection.interface';

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote): Quote {
        return this.favoriteQuotes.find((quoteEl: Quote) => {  //  quoteEl passed to the CB Fn by .find and returns true if its a match of null if not
            return quoteEl.id == quote.id;
        })
    }
}