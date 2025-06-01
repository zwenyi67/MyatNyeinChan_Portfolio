document.addEventListener("DOMContentLoaded", () => {
      fetch('nav.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById("nav").innerHTML = data;
        });

        fetch('footer.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById("footer").innerHTML = data;
        });
    });