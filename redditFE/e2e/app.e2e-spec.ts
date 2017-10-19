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
  it('should post title,text,subreddit on page and populate',()=>{
    page1.navigateTo();
    var input1=page1.posttitleonpage();
    var input2=page1.posttextonpage();
    var input3=page1.postsubredditonpage();
    var input4=page1.checkbuttonInsert();
    var input5=page1.checkbuttonSearch();
    input1.click();
    input1.sendKeys("First title test entry for demo");
    input2.click();
    input2.sendKeys("First text test entry for demo");
    input3.click();
    input3.sendKeys("First Subreddit test entry for demo");
    input4.click();
    input5.click();
    browser.sleep(5000);
  });
  it('should post title,text,subreddit on page and populate',()=>{
    page1.navigateTo();
    var input1=page1.posttitleonpage();
    var input2=page1.posttextonpage();
    var input3=page1.postsubredditonpage();
    var input4=page1.checkbuttonInsert();
    var input5=page1.checkbuttonSearch();
    input1.click();
    input1.sendKeys("Second title test entry for demo");
    input2.click();
    input2.sendKeys("Second text test entry for demo");
    input3.click();
    input3.sendKeys("Second Subreddit test entry for demo");
    input4.click();
    input5.click();
    browser.sleep(5000);
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
