# deferScripts.js
Properly defer your JavaScript files for increased performance! <br>

## Overview
Deferring JavaScript files is important due to the fact that Google uses page speed as a ranking factor.  This speed is measured from the time the page is called to when the page is initially loaded.  Defering your JavaScript files will reduce initial load time thus improving your performance and rankings.

What is deferring? <br>
"Deferring loading of JavaScript functions that are not called at startup reduces the initial download size, allowing other resources to be downloaded in parallel, and speeding up execution and rendering time." <br>
-[Google](https://developers.google.com/speed/docs/best-practices/payload#DeferLoadingJS)


## Installation
Include the source script in your html using one of two ways: <br>
<br>
A) Via a script block <br>
-- OR -- <br> 
B) Via an external script file reference

*Note: Using a script block (A) will be faster due to the fact it does not require a network request to fetch the file.

##### A) Including via script block

```js
<script type="text/javascript">
    /*!
    
           ##    #####      Copyright (c) - Kevin McGinty
         # _ #  ###        
        #   #  #            AtomicFrameworks
    
    */
    var deferScripts=function(t,e){"use strict";var n=function(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,e&&(n.onreadystatechange=function(){"complete"===this.readyState&&e()},n.onload=e),document.body.appendChild(n)},a=0,o=function(){var i,d;if("string"==typeof t)n(t);else if(e)a<t.length-1?(n(t[a],o),a+=1):n(t[a]);else if(t instanceof Array)for(i=0,d=t.length;d>i;i+=1)n(t[i])};window.addEventListener?window.addEventListener("load",o,!1):window.attachEvent?window.attachEvent("onload",o):window.onload=o};
</script>
```

##### B) Including via external file reference

```js
<script src="/src/deferScript.min.js" type="text/javascript"></script>
```

## Usage

Defer any scripts not necessary for page load, or any that are not actually used by the document before the onload event. <br>
<br>
deferScripts.js accepts either an array of script file references or a string file reference. <br>
<br>
The script's src can be either a relative URL or an external URL such as a file on a CDN. <br>
<br>
When scripts are added dynamically they are loaded asynchronously meaning that they may not always load in order. To require scripts to load synchronously pass true as the second argument to the deferScripts() call.

```html
<script type="text/javascript">
    // External CDN hosted script
    deferScripts('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');

    // Array of scripts
    deferScripts(['someScript.js', 'anotherScript.js']);
    
    // Single script
    deferScripts('index.js');
    
    // Require scripts to load synchronously (in order) by passing true as the second argument
    deferScripts([
        '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
        'requiresPreviousScript.js'
    ], true);
</script>
```

## License 
deferScripts.js is released under the MIT license. <br>
[www.opensource.org/licenses/MIT](www.opensource.org/licenses/MIT)
