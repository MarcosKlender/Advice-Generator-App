function adviceReload() {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        document.getElementById("advice-id").innerHTML = `ADVICE #${data.slip.id}`;
        document.getElementById("advice-text").innerHTML = `"${data.slip.advice}"`;
    });
}

adviceReload();