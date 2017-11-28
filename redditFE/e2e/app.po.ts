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
  checksignupbutton(){
    return element(by.className("signup"));
  }
  
}
export class Postapp {
  navigateTo() {
    return browser.get('/posts');
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
  postcommentspage(){
    return element(by.className("comments"));
  }
}
  export class CommentsPage {
    navigateTo() {
      return browser.get('/comments');
    }
    insertcommentspage(){
      return element(by.className("checkinsert"));
    }
    getinputtxtc(){
      return element(by.className("textdisp"));
    }
    
  }
  export class registerPage {
    navigateTo() {
      return browser.get('/registeruser');
    }
    insertusername(){
      return element(by.className("c1"));
    }
    insertpwd1(){
      return element(by.className("c2"));
    }
    insertpwd2(){
      return element(by.className("c3"));
    }
    insertemail(){
      return element(by.className("c4"));
    }
    pressb(){
      return element(by.className("c5"));
    }
  }
  // checkbuttonDelete(){
  //   return element(by.className("checkdelete"));
  // }
