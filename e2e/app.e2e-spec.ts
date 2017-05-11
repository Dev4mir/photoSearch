import { HelloNgPage } from './app.po';

describe('hello-ng App', () => {
  let page: HelloNgPage;

  beforeEach(() => {
    page = new HelloNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
