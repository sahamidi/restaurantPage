export function pageLoad()
{
    let onPageStartup = document.createElement("div")
    let parentElement = document.getElementById(`content`)

    parentElement.appendChild(onPageStartup)
    onPageStartup.id = "onPageStartup"
    
    onPageStartup.innerHTML=`<p>WELCOME</p>
    <p>Your Cronut Source.</p>`
    startUpBefore.innerText=""
}