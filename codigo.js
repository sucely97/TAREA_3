escribe = document.getElementById('escribe');
escribe.addEventListener('keyup', actuar);

function actuar() {
    if (document.getElementById("escribe").value.length > 10) {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("alerta").innerHTML = "<p> tu palabra tiene mas de 10 caracteres </p>";
    }
    document.getElementById("resultado").innerHTML = "<h1>" + document.getElementById("escribe").value + "</h1>";
}