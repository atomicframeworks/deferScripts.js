/*!
    
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global document, window*/
var deferScripts = function (scripts, synchronous) {
    'use strict';
    var appendScript = function (src, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        if (callback) {
            // IE
            script.onreadystatechange = function () {
                if (this.readyState === 'complete') {
                    callback();
                }
            };
            script.onload = callback;
        }
        document.body.appendChild(script);
    },
        scriptIndex = 0,
        loadScripts = function () {
            var i, l;
            if (typeof scripts === 'string') {
                // If a string just append it
                appendScript(scripts);
            } else if (synchronous) {
                // If synchronous load then append the script with a callback to append next after it has finished loading
                if (scriptIndex < scripts.length - 1) {
                    appendScript(scripts[scriptIndex], loadScripts);
                    scriptIndex += 1;
                } else {
                    // If the last script in array then just add it (no callback)
                    appendScript(scripts[scriptIndex]);
                }
            } else if (scripts instanceof Array) {
                for (i = 0, l = scripts.length; i < l; i += 1) {
                    appendScript(scripts[i]);
                }
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