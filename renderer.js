// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function start(time,difficulty)
{
    var progressbar=document.querySelector(".progress-bar")
    var progress=document.querySelector(".progress")
    var elapsedtime=0

    var c=window.setInterval(()=>
    {
     if(elapsedtime<time)
     {
      elapsedtime+=1
      progress.style.width=((100*elapsedtime)/time)+"%"
      console.log(elapsedtime)
     }
     else
     {
         window.clearInterval(c)
     }

    },1000)  


}

start(20,1)

