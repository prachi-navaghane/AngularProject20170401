import { Project20170401Page } from './app.po';

describe('project20170401 App', function() {
  let page: Project20170401Page;

  beforeEach(() => {
    page = new Project20170401Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
