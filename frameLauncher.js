(function () {
    const {BrowserWindow} = require('electron').remote

    function init() {
        document.getElementById("min-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.minimize();
        });

        document.getElementById("close-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.close();
        });
    };

    document.onreadystatechange =  () => {
        if (document.readyState == "complete") {
            init();
        }
    };
})();