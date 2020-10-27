import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  search(term: string) {
    return 'I am wikipedia search results';
  }
}

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
