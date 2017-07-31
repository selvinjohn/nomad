import { NomadPage } from './app.po';

describe('nomad App', () => {
  let page: NomadPage;

  beforeEach(() => {
    page = new NomadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
