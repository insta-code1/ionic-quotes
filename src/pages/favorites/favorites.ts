import { QuotePage } from './../quote/quote';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { QuotesService } from './../../services/quotes.service';
import { Quote } from './../../data/quoteCollection.interface';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quoteService.removeQuoteFromFavorites(quote);
        // this.quotes = this.quoteService.getFavoriteQuotes();           // touch DB and re render the favorite quotes again
        const position = this.quotes.findIndex((quoteEl: Quote) => {      
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);                                  // don't touch DB but re render the favorite quotes again using splice
      }
    });
  }
}
