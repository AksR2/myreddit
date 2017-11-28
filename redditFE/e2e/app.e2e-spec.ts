import { AppPage, CommentsPage, registerPage } from './app.po';
import {Postapp} from './app.po';
import { browser } from 'protractor';

describe('mean-frontend App', () => {
  let page: AppPage;
  let page1: Postapp;
  let page2: CommentsPage;
  let page3: registerPage;

  beforeEach(() => {
    page1=new Postapp();
    page = new AppPage();
    page2=new CommentsPage();
    page3=new registerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My ReDDit app!');
  });
  it('should click on signup button', () => {
    page.navigateTo();
    var input1=page.checksignupbutton();
    input1.click();
  });
  
  it('should register the user',()=>{
      page3.navigateTo();
      var input1=page3.insertusername();
      var input2=page3.insertpwd1();
      var input3=page3.insertpwd2();
      var input4=page3.insertemail();
      var input5=page3.pressb();
      input1.click();
      input1.sendKeys("newuser");
      input2.click();
      input2.sendKeys("abcpwd");
      input3.click();
      input3.sendKeys("abcpwd");
      input4.click();
      input4.sendKeys("newemail@gmail.com");
      input5.click();
  });
  it("should check whether the login form is submitting",()=>{
    page.navigateTo();
    var input1=page.checkloginform();
    var input2=page.checkpwdform();
    var input3=page.checksubmitbutton();
    input1.click();
    input1.sendKeys("Himanshu");
    input2.click();
    input2.sendKeys("abc");
    input3.click();
});
  
  
 
 
  it('should allow to open navigation bar using fab',()=>{
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
  });
  it('should allow to navigate using all button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checkallbutton();
    input2.click();
  });
  it('should allow to navigate using random button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checkrandombutton();
    input2.click();
  });
  it('should allow to navigate using science button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checksciencebutton();
    input2.click();
  });
  it('should allow to navigate using funny button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checkfunnybutton();
    input2.click();
  });
  it('should allow to navigate using math button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checkmathbutton();
    input2.click();
  });
  it('should allow to navigate using popular button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checkpopularbutton();
    input2.click();
  });
  it('should allow to navigate using user button',()=>{
    //page.navigateTo();
    page1.navigateTo();
    var input1=page1.checknavigatebutton();
    input1.click();
    var input2=page1.checkuserbutton();
    input2.click();
  });
  
  it('should post title,text,subreddit on page and populate',()=>{
    page1.navigateTo();
    var input1=page1.posttitleonpage();
    var input2=page1.posttextonpage();
    var input3=page1.postsubredditonpage();
    var input4=page1.checkbuttonInsert();
    var input5=page1.checkbuttonSearch();
    input1.click();
    input1.sendKeys("Third title test entry for demo");
    input2.click();
    input2.sendKeys("Third text test entry for demo");
    input3.click();
    input3.sendKeys("Third Subreddit test entry for demo");
    input4.click();
    input5.click();
    //browser.sleep(5000);
  });
    // it('should click on the comment button',()=>{
    //  page1.navigateTo();
    //    var input1=page1.postcommentspage();
    //    input1.click();
    // });
    // it('should check whether the comments are being inserted or not',()=>{
    //   page2.navigateTo();
    //     var input1=page2.getinputtxtc();
    //     var input2=page2.insertcommentspage();
    //     input1.click();
    //     input1.sendKeys("I love this post!!!!")
    //     input2.click();
    //  });


  // })
  // it('should login the user, insert the post, check every subreddit page and insert comments',()=>{
  //   page.navigateTo();

  // })


  // it('should delete the subreddit', () => {
  //   page1.navigateTo();
  //   var input1=page1.checkbuttonDelete();
  //   input1.click();
  // });

});
