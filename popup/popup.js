function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
        APIKey: document.querySelector("#APIKey").value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#APIKey").value = result.APIKey || "";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting;

    chrome.storage.sync.get("APIKey", function (result) { getting = result });
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
