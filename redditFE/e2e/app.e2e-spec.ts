import { AppPage } from './app.po';
import {Postapp} from './app.po';
import { browser } from 'protractor';

describe('mean-frontend App', () => {
  let page: AppPage;
  let page1: Postapp;

  beforeEach(() => {
    page1=new Postapp();
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to My ReDDit app!');
  });
  
  it("should check whether the login form is submitting",()=>{
    page.navigateTo();
    var input1=page.checkloginform();
    var input2=page.checkpwdform();
    var input3=page.checksubmitbutton();
    input1.click();
    input1.sendKeys("Akshay");
    input2.click();
    input2.sendKeys("password");
    input3.click();
});
  
  
 
 
  it('should allow to open navigation bar using fab',()=>{
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
  });
  it('should allow to navigate using all button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checkallbutton();
    input2.click();
  });
  it('should allow to navigate using random button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checkrandombutton();
    input2.click();
  });
  it('should allow to navigate using science button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checksciencebutton();
    input2.click();
  });
  it('should allow to navigate using funny button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checkfunnybutton();
    input2.click();
  });
  it('should allow to navigate using math button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checkmathbutton();
    input2.click();
  });
  it('should allow to navigate using popular button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checkpopularbutton();
    input2.click();
  });
  it('should allow to navigate using user button',()=>{
    //page.navigateTo();
    page.navigateTo();
    var input1=page.checknavigatebutton();
    input1.click();
    var input2=page.checkuserbutton();
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
    browser.sleep(5000);
  });


  // it('should delete the subreddit', () => {
  //   page1.navigateTo();
  //   var input1=page1.checkbuttonDelete();
  //   input1.click();
  // });

});
