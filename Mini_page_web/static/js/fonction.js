function change_coclor() {
    if (document.body.style.background === "black" ) {
        document.body.style.background = "blue";
    }
    else {
        document.body.style.background = "black";
    }
}
window.addEventListener('load', () => {
    
    const name = sessionStorage.getItem('NAME');
    document.getElementById('user').innerHTML = "visiteur: "+name;


})