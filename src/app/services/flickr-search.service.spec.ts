import { TestBed, inject } from '@angular/core/testing';

import { FlickrSearchService } from './flickr-search.service';

describe('FlickrSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrSearchService]
    });
  });

  it('should ...', inject([FlickrSearchService], (service: FlickrSearchService) => {
    expect(service).toBeTruthy();
  }));
});
