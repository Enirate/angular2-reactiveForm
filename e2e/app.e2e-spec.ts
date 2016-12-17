import { NgReactivePage } from './app.po';

describe('ng-reactive App', function() {
  let page: NgReactivePage;

  beforeEach(() => {
    page = new NgReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
