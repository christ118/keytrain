// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var text;
var userdata;




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
  body.innerHTML =`
<div id="challenge">
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
  </div>
  </div>`




  var time = Math.floor(text.length / (1 + (userdata.level - 1) * 0.2))
  console.log(time)
  var deftext = document.querySelector("#text")
  deftext.textContent=text
    var progressbar=document.querySelector(".progress-bar")
    var progress=document.querySelector(".progress")
  var elapsedtime = 0
  document.querySelector("textarea").focus()


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
         userdata.level++
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


document.getElementById("giveup").addEventListener("click",()=>
{
    start()
    window.clearInterval(c) 
})

  
document.getElementById("submit").addEventListener("click", () => {

  if (document.querySelector("textarea").value === text)
  {
   console.log("vous avez réussi")
  window.clearInterval(c)
  start()
    }

})
  
  document.getElementById("restart").addEventListener("click", () => {
  window.clearInterval(c)
  startchallenge(text)
})
}

var j=false
function start()
{

  async function load()
{
  userdata = await version.load_user_data() 
  text= await version.load_text()
  console.log(userdata)
  console.log(text)
    document.getElementById("level").textContent = "level :" + userdata.level
    j = true
}

  if (j == false)
  {
    load()
  
  }
 
  var body=document.querySelector("body")
body.innerHTML=`
<div id="menu-wrapper">
<span id="level"></span>
<div id="menu">
  <button id="startchallenge">challenge</button>
  <button id="credits">Credits</button>
  <button id="quit">quit</button>
</div>
</div>
`
if(j==true)
{
  document.getElementById("level").textContent="level :" +userdata.level
}

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

