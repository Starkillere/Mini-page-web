function handleSubmit () {
    const name = document.getElementById('name').value;
    
    sessionStorage.setItem("NAME", name);
    window.location.reload();
    return;
}