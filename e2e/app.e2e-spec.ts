import { PickupBballPage } from './app.po';

describe('pickup-bball App', () => {
  let page: PickupBballPage;

  beforeEach(() => {
    page = new PickupBballPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
