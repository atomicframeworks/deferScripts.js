# deferScripts.js
Properly defer your JavaScript files for increased performance! <br>

## Overview
It is important to defer your JavaScript files if possible due to the fact that Google uses page speed and a ranking factor.  This speed is measured from the time the page is called to when the page is initially loaded.  Defering your JavaScript files reduces initial load time and will help improve your performance and rankings.

What is deferring? <br>
<br>
"Deferring loading of JavaScript functions that are not called at startup reduces the initial download size, allowing other resources to be downloaded in parallel, and speeding up execution and rendering time." <br>
-[Google](https://developers.google.com/speed/docs/best-practices/payload#DeferLoadingJS)


## Installation
Include the source script in your html via a script block (A) OR via an external script file reference (B). <br>

Using a script block will be faster because due to the fact it does not require a network request to fetch the file.

##### A) Using a script block

```js
<script type="text/javascript">
    /*!
    
           ##    #####      Copyright (c) - Kevin McGinty
         # _ #  ###        
        #   #  #            AtomicFrameworks
    
    */var deferScripts=function(scriptArray){'use strict';var appendScript=function(src){var script=document.createElement('script');script.type='text/javascript';script.src=src;document.body.appendChild(script);},loadScripts=function(){var i,l;if(scriptArray instanceof Array){for(i=0,l=scriptArray.length;i<l;i+=1){appendScript(scriptArray[i]);}}else if(typeof scriptArray==='string'){appendScript(scriptArray);}};if(window.addEventListener){window.addEventListener('load',loadScripts,false);}else if(window.attachEvent){window.attachEvent('onload',loadScripts);}else{window.onload=loadScripts;}};
</script>
```

##### B) Using an external script file reference

```js
<script src="/src/deferScript.min.js" type="text/javascript"></script>
```

## Usage

Defer any scripts not necessary for page load or that are not actually used by the document before the onload event. <br>
<br>
You can pass an array of script file references or a string file reference.

```html
<script type="text/javascript">
    deferScripts(['someScript.js','anotherScript.js']);
    deferScripts('index.js');
</script>
```

## License 
deferScripts.js is released under the MIT license <br>
[www.opensource.org/licenses/MIT](www.opensource.org/licenses/MIT)
