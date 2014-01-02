/*!
    
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global document, window*/
var deferScripts = function (scriptArray) {
    'use strict';
    var appendScript = function (src) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        document.body.appendChild(script);
    },
        loadScripts = function () {
            var i, l;
            if (scriptArray instanceof Array) {
                for (i = 0, l = scriptArray.length; i < l; i += 1) {
                    appendScript(scriptArray[i]);
                }
            } else if (typeof scriptArray === 'string') {
                appendScript(scriptArray);
            }
        };
    // Attach loadScripts to window load
    if (window.addEventListener) {
        window.addEventListener('load', loadScripts, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', loadScripts);
    } else {
        window.onload = loadScripts;
    }
};