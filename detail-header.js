document.addEventListener("DOMContentLoaded", () => {
      fetch('detail-header.html')
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