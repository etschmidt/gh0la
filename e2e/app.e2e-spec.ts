import { Gh0laPage } from './app.po';

describe('gh0la App', function() {
  let page: Gh0laPage;

  beforeEach(() => {
    page = new Gh0laPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
