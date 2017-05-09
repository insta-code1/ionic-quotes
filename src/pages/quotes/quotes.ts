import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { Quote, QuoteCollection } from './../../data/quoteCollection.interface';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteCollection;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController) { }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.get('quotes');
  //   console.log(this.quoteGroup);
  // }
  // Add elvis operator (?) in template to use this approach

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Ok');
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
}
