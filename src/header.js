
export function addHeader(){
  let parentElement = document.getElementById(`content`)
  let newDivDescription= document.createElement(`div`)
  newDivDescription.id = "newDivDescription"
  parentElement.appendChild(newDivDescription)
    newDivDescription.innerHTML = `<h1 class="header">Don Eat My Cronut!</h1>
    <img src="/home/yourpalsal/projects/restaurantPage/src/LAFB-GT1830_DunlopDonuts-13.gif"></img>
  <div id="description">Donut cravers unite with the simplistic menu of Cronuts that matter.  Cronuts are a melt
  in your mouth creation where traditional donuts and croissant collide</div>
</div>`
}
