import { Component, OnInit } from '@angular/core';

import quotes from '../../data/quotes';
import { Quote, QuoteCollection } from './../../data/quoteCollection.interface';
import { QuotesPage } from './../quotes/quotes';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: QuoteCollection[];
  quotesPage = QuotesPage;

  ngOnInit() {
    this.quoteCollection = quotes;
  }


}
