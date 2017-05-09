import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Quote, QuoteCollection } from './../../data/quoteCollection.interface';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteCollection;

  constructor(private navParams: NavParams) { }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.get('quotes');
  //   console.log(this.quoteGroup);
  // }
  // Add elvis operator (?) in template to use this approach

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
}
