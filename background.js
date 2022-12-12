chrome.runtime.onInstalled.addListener(()=> {
    console.log("installed");
}),

chrome.bookmarks.onChanged.addListener(()=>{
    alert('Bookmark saved');
})