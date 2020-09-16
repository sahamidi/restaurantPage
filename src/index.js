import _ from 'lodash';
import addHeader from "./header";
import {croMenuCreate} from "./croMenu.js"
import {coffMenuCreate} from "./coffMenu.js"
function component() {
    const element = document.createElement('div');
  

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  addHeader();
  croMenuCreate();
  coffMenuCreate();
  document.body.appendChild(component());


//<h1 class="header">Don Eat My Cronut!</h1>
  //  <img src="/home/yourpalsal/projects/restaurantPage/src/LAFB-GT1830_DunlopDonuts-13.gif"></img>
//  <div id="description">Donut cravers unite with the simplistic menu of Cronuts that matter.  Cronuts are a melt
 // in your mouth creation where traditional donuts and croissant collide</div>
//</div>
{/* <h2>
  Cronut Flavors
</h2>
<ul>
  <li><span class="left">Traditional Cronut</span><span class="right">  $10.00</span></li>
  <li><span class="left">Creme Brule Cronut</span><span class="right">    $10.00</span></li>
  <li><span class="left">Glazed Cronut</span><span class="right">         $2.00</span></li>
  <li><span class="left">Chocolate Filled Cronut</span><span class="right">  $3.00</span></li>
</ul> */}
{/* <h2> 
  Coffee
</h2>
<ul>
  <li><span class="left">Latte</span><span class="right">  $3.00</span></li>
  <li><span class="left">Regular Coffee</span><span class="right">  $3.00</span></li>
</ul>
<div>
  "Flavors: Hazelnut, Vanilla, Chocolate, Pumpkin Spice"
</div> */}




// let content = document.getElementById("content")

// let desc = document.createElement("div")

// content.appendChild(desc)

// desc.className = "description"

// let divElement = document.getElementsByClassName("description")

// doncument.getElementById("description").innerText = "Donut cravers unite with the simplistic menu of Cronuts that matter.  Cronuts are a melt in your mouth creation where traditional donuts and croissant collide"

// let header2 = document.createElement("h2")
// divElement.appendChild(header2)
// header2.id = "cronName"
// document.getElementById("cronName").innerText = "Cronut Flavors"


// let listOfCro = document.createElement("ul")
// listOfCro.id = "listOfCr"


//   function menuList(text)
//   {
//     let liItem = document.createElement("li")
//     liItem.textContent = text
//     return liItem
//   }

//   function nowAppend(parent, child)
//   {
//     children.forEach(function (child){
//       parent.appendChild(child)
//     })
//   }
 
//   let croList = document.getElementById("listOfCr")
//   let doItems = {
//     menuList("Traditional Cronut $10.00"),
//     menuList("Creme Brlue Cronut $10.00"),
//     menuList("Glazed Cronut $2.00"),
//     menuList("Chocolate Filled Cronut $3.00")
//   }

//   nowAppend(croList,doItems)