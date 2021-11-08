function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(target) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (pattern.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error');
        }
    }
}

function validate() {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const input = document.getElementById("email");
    input.addEventListener("change", (e) => {
      e.target.className = regex.test(e.target.value) ? "" : "error";
    });
  }


