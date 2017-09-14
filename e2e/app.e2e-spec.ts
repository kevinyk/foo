import { AngularLecturePage } from './app.po';

describe('angular-lecture App', () => {
  let page: AngularLecturePage;

  beforeEach(() => {
    page = new AngularLecturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
