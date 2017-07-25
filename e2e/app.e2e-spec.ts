import { HoursInBetweenPage } from './app.po';

describe('hours-in-between App', () => {
  let page: HoursInBetweenPage;

  beforeEach(() => {
    page = new HoursInBetweenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
