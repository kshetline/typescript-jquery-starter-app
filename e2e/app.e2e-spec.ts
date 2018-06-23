import { browser } from 'protractor';
import { AppPage } from './app.po';

browser.waitForAngularEnabled(false);

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMessageText()).toEqual('Hello, world!');
  });
});
