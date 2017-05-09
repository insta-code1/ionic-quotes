import { Component, OnInit } from '@angular/core';

import { QuoteCollection } from "../../data/quoteCollection.interface";
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: QuoteCollection;

  ngOnInit() {
    this.quoteCollection = quotes;
  }


}
