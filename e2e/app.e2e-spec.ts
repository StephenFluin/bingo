import { BingoPage } from './app.po';

describe('bingo App', () => {
  let page: BingoPage;

  beforeEach(() => {
    page = new BingoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
