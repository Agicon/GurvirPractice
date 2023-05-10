export default class Base_PO {
  open(path) {
    browser.setWindowSize(1366, 768);
    //browser.maximizeWindow();
    browser.url(path);
    // browser.maximizeWindow();

    // const handles = browser.getWindowHandles();
    // if (handles.length >0) {
    //   browser.switchToWindow(handles[0]);
    //   browser.closeWindow();
    // }

    // browser.newWindow(path, 'WebdriverIO window', 'width=420,height=230,resizable,scrollbars=yes,status=1')
    // browser.maximizeWindow();

    // const handles = browser.getWindowHandles();
    // if (handles.length >1) {
    //     browser.switchToWindow(handles[1]);
    //     browser.switchToWindow(handles[0]);
    //     browser.closeWindow();
    //     browser.switchToWindow(handles[1]);
    // }
  }

  openUrlInNewTab(url) {
    try {
      browser.newWindow(url)
      // window.open(url);
      browser.pause(3000)
    } catch (error) {
      
    }
  
  }

  switchToWindowAtFirtIndex() {
    // var handle = browser.getWindowHandles();
    // console.log("Mutiple Windows handle " + handle);
    // browser.switchToWindow(handle[0]);
    const handles = browser.getWindowHandles();
    if (handles.length > 1) {
      browser.switchToWindow(handles[1]);
      browser.closeWindow();
      browser.switchToWindow(handles[0]);
    }
  }

  switchToWindowNewTab() {
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    try {

      browser.switchToWindow(handle[1]);

    } catch (error) {

    }



  }

  switchToSelectedTab(tabNo) {
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    browser.switchToWindow(handle[tabNo]);
  }

  switchToParentTab() {
    var handle = browser.getWindowHandles();
    console.log("Mutiple Windows handle " + handle);
    browser.switchToWindow(handle[0]);
  }

  waitUsingFixedTimeOut(time) {
    console.log("Pausing for: " + time + " Seconds");
    browser.pause(time);
  }

  getCurrentDate() {
    var d = new Date();
    var currentDate = d.getDate();
    return currentDate;
  }

  getCurrentTime() {
    var currentTime = new Date();
    return currentTime;
  }
}
