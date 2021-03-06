import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { Quote, QuoteCollection } from './../../data/quoteCollection.interface';
import { QuotesService } from "../../services/quotes.service";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteCollection;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService) { }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.get('quotes');
  //   console.log(this.quoteGroup);
  // }
  // Add elvis operator (?) in template to use this approach

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No I Changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
}
