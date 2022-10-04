// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function startchallenge()
{
 
      var body=document.querySelector("body")
body.innerHTML=`
<div class="textareas">

<textarea></textarea>
<div></div>

</div>
<div class="buttons">
<button id="submit">Soumettre</button>
<button id="restart">Recommencer</button>
<button id="giveup">Abandonner</button>
</div>

  <div class="progress-bar">
    <div class="progress"> </div>
  </div>`
    var time=300
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
gvpbutton=document.getElementById("giveup")
resbutton=document.getElementById("restart")
subbutton=document.getElementById("submit")
  console.log("ggg")

gvpbutton.addEventListener("click",()=>
{
 
    start()
    window.clearInterval(c) 
})
}

function start()
{
  var body=document.querySelector("body")
body.innerHTML=`
<div>
<div>
<button id="startchallenge">challenge</button>
<button id="credits">Credits</button>
</div>
<div>`
  
var challengebutton=document.getElementById("startchallenge")
  challengebutton.addEventListener("click", startchallenge,) 
  var creditbutton=document.getElementById("credits")
  creditbutton.addEventListener("click", credits)  
}

function credits()
{
  var body=document.querySelector("body")
  body.innerHTML=`
  <div>
  <div>
<H1>authors</h1>

  </div>
  <div>`
}
start()

