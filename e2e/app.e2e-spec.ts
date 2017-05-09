import { NgGoogleBotTestPage } from './app.po';

describe('ng-google-bot-test App', () => {
  let page: NgGoogleBotTestPage;

  beforeEach(() => {
    page = new NgGoogleBotTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
