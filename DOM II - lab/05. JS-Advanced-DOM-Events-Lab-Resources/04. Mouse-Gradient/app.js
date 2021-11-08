function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(ev) {
        const box = ev.target();
        const offset = Math.floor(ev.clienttX / box.clientWidth * 100);
    
        output.textContent = `${offset}%`;
    }
}


function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result = document.getElementById("result");
    gradient.addEventListener("mousemove", function (e) {
      let mouseX = e.offsetX;
      let width = e.target.clientWidth;
      let percent = (100 / width) * mouseX;
      result.textContent = `${Math.trunc(percent)}%`;
    });
    document.getElementById("gradient-box").addEventListener("mouseout", () => {
      result.textContent = "";
    });
  }

