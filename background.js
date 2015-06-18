chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create("frameless_window.html",
        {  frame: "none",
            //alwaysOnTop: true,
            id: "framelessWinID",
            innerBounds: {
                width: 1440,
                height: 350,
                minWidth: 1440,
                minHeight: 350
            }
        }
    );

});