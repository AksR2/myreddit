import { browser, by, element } from 'protractor';
/**
 * 
 * 
 * @export
 * @class AppPage
 */
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
 /**
  * 
  * 
  * @returns 
  * @memberof AppPage
  */
 getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  checkloginform(){
    return element(by.className("login"));
  }
  checkpwdform(){
    return element(by.className("pwd"));
  }
  checksubmitbutton(){
    return element(by.className("submit"));
  }
  checknavigatebutton(){
    return element(by.className("example-fab"));
  }
  checkallbutton(){
    return element(by.className("all"));
  }
  checkrandombutton(){
    return element(by.className("random"));
  }
  checksciencebutton(){
    return element(by.className("science"));
  }
  checkfunnybutton(){
    return element(by.className("Funny"));
  }
  checkmathbutton(){
    return element(by.className("math"));
  }
  checkpopularbutton(){
    return element(by.className("popular"))
  }
  checkuserbutton(){
    return element(by.className("users"))
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