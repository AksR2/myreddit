import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
export class Postapp {
  navigateTo() {
    return browser.get('/posts');
  }
  posttitleonpage(){
    return element(by.className('titledisp'));
  }
  posttextonpage(){
    return element(by.className("textdisp"));
  }
  postsubredditonpage(){
    return element(by.className("subredditdisp"));
  }
  checkbuttonInsert(){
    return element(by.className("checkinsert"));
  }
  checkbuttonSearch(){
    return element(by.className("searchbutton"));
  }
  // checkbuttonDelete(){
  //   return element(by.className("checkdelete"));
  // }
}