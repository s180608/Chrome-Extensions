window.onload = () =>{
    const button = document.createElement('button');
    button.id = "Darkmodebutton";
    button.textContent = "Darkmode";
    document.querySelector("#center").prepend(button);

    button.addEventListener('click', () => enableDarkMode());

}

function enableDarkMode(){
    document.getElementsByTagName('ytd-app')[0].style
    .backgroundColor = 'black';
}