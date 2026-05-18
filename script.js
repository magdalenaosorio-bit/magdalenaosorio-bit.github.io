function cargarComponente(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

cargarComponente("header", "header.html");
cargarComponente("footer", "footer.html");