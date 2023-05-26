(function () {
      
    const remote = require('electron').remote; 
    const { app, BrowserWindow, ipcMain } = require('electron');
    const ipc = require('electron').ipcRenderer;
    
    function init() { 
      document.getElementById("min-btn").addEventListener("click", function (e) {
        console.log("min clicked")
        const window = remote.getCurrentWindow();
        window.minimize(); 
      });
      
    //   document.getElementById("max-btn").addEventListener("click", function (e) {
    //     const window = remote.getCurrentWindow();
    //     if (!window.isMaximized()) {
    //       window.maximize();
    //     } else {
    //       window.unmaximize();
    //     }	 
    //   });
      
      document.getElementById("close-btn").addEventListener("click", function (e) {
        // console.log("exit clicked");
        // const window = remote.getCurrentWindow();
        // window.close();
        ipc.send('quit-app');
      }); 
    }; 
    
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        init(); 
      }
    };
  })();
  