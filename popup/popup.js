console.log("I am just a script!");

//Run the sunctions after the contents are loaded
document.addEventListener("DOMContentLoaded", runFunction);

const runFunction = () => {
  // alert("Conten Loaded!")
  document.getElementById("button").addEventListener("click", sendKeys);
  const sendKeys = () => {

  //Getting the current tab details
        chrome.tabs.query(
          { active: true, currentWindow: true },
          (tabs) => {
            const activeTab = tabs[0];
            //Sending message to the active tab
            chrome.tabs.sendMessage(activeTab.id, {msg:"start"});
          }
        );
  }
}
