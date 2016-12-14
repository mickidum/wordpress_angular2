import { WordpressAngular2Page } from './app.po';

describe('wordpress-angular2 App', function() {
  let page: WordpressAngular2Page;

  beforeEach(() => {
    page = new WordpressAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
