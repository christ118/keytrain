// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var text;
var userdata;

async function load()
{
  userdata = await version.load_user_data() 
  text= await version.load_text()
  console.log(userdata)
  console.log(text)

}

load()


function challenge()
{
  console.log(text.challenge)
  console.log(Math.random() * text.challenge.length)
  
  startchallenge(text.challenge[Math.floor(Math.random()*text.challenge.length)])
}
function startchallenge(text)
{

  console.log(text)
      var body=document.querySelector("body")
body.innerHTML=`
<div class="textareas">

<textarea></textarea>
<div id="text"></div>

</div>
<div class="buttons">
<button id="submit">Soumettre</button>
<button id="restart">Recommencer</button>
<button id="giveup">Abandonner</button>
</div>

  <div class="progress-bar">
    <div class="progress"> </div>
  </div>`
  var time = Math.floor(text.length / (1 + (userdata.level - 1) * 0.2))
  console.log(time)
  var deftext = document.querySelector("#text")
  deftext.textContent=text
    var progressbar=document.querySelector(".progress-bar")
    var progress=document.querySelector(".progress")
  var elapsedtime = 0
  

    var c=window.setInterval(()=>
    {
      console.log(elapsedtime)
     if(elapsedtime<time)
     {
      elapsedtime+=1
      progress.style.width=((100*elapsedtime)/time)+"%"
      console.log(elapsedtime)
     }
     else
     {
      window.clearInterval(c)
       if (document.querySelector("textarea").value === text)
       {
         console.log("you win")
         window.clearInterval(c)
         start()
       }
       else
       {
         console.log("you fail")
         start()
        }

         
     }

    },1000)  
 var gvpbutton=document.getElementById("giveup")
var resbutton=document.getElementById("restart")
var subbutton =document.getElementById("submit")


gvpbutton.addEventListener("click",()=>
{
    start()
    window.clearInterval(c) 
})

  subbutton.addEventListener("click", () => {
    console.log(text+"\n"+document.querySelector("textarea").value)
  if (document.querySelector("textarea").value === text)
    console.log("vous avez réussi")
})
}


function start()
{
  var body=document.querySelector("body")
body.innerHTML=`
<div>
<div>
<button id="startchallenge">challevnge</button>
<button id="credits">Credits</button>
</div>
<div></div></div>
  
`
  
var challengebutton=document.getElementById("startchallenge")
  challengebutton.addEventListener("click", challenge)
  
  challengebutton.addEventListener("click", async () => {
    const u = await window.version.load_user_data()
    console.log(u)
  })
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

