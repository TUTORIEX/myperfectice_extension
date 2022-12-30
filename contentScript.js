/*
    Author: Arijit Paria 
    Subscribe @tutoriex on youtube to get more such scripts
    Note:
    This script is free to use, do not pay anyone anything.
    To modify or redistribute, kindly follow the license agreement strictly.
*/

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Script Started");
  if (message.msg == "Sending Data") {
    let ansKey = message.keys;
    let mint=20; // min-time : 20 sec
    let maxt=60; // max-time : 60 sec
    let t=Math.floor(Math.random()*(maxt - mint + 1) + mint)*1000;
    console.log(ansKey);
    
    setTimeout(function () {
      document
        .querySelector(
          `#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.adaptive-question-box.bg-white.p-1.ng-star-inserted > div:nth-child(2) > mcq-question > div > div.question-answers.mb-0 > div:nth-child(${
            ansKey + 1
          }) > div > label > span`
        )
        .click();
        setTimeout(()=>{
      document
        .querySelector(
          "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted > div > a"
        )
        .click();},1000); // wait 1 sec after option click otherwise gives error null on click event
    }, t);

    setTimeout(() => {
      document
        .querySelector(
          "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.save-next-btn.d-block.d-lg-none.fixed-bottom.ng-star-inserted > a"
        )
        .click();
    }, t+3000); // loading time for solution 3 sec maybe?
  }

  if (message.msg == "start") {
    chrome.runtime.sendMessage({ msg: "startPanel" });
  };
});

