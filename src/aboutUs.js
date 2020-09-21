export function aboutUs()
{
    let parentElement = document.getElementById(`content`)
    let newDivAbout = document.createElement(`div`)
    newDivAbout.id = "newDivAbout"
    parentElement.appendChild(newDivAbout)

    newDivAbout.innerHTML = `<h2>About Us</h2>
    <p> Contact: 777-777-7777</p>
    <p>Email: whoaNutCronut@gmail.com</p>
    <p>We love everything Cronut and cant wait to have you try ours!!</p>
    `
}