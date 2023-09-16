let form = document.querySelector("#form");
form.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    let choice = document.querySelector("#selection").value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "function.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("choice="+choice);
}