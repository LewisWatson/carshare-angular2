import { CarshareAngular2Page } from './app.po';

describe('carshare-angular2 App', function() {
  let page: CarshareAngular2Page;

  beforeEach(() => {
    page = new CarshareAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
