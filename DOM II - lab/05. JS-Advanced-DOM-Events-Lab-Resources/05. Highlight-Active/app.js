function focused() {
    const fields = Array.from(document.getElementsByTagName('input')); 

    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }
    function onFocus(ev) {
        ev.target.parentNode.className() = 'focused';
    }
    function onBlur(ev) {
        ev.target.parentNode.className() = "";
    }
}

function focus() {
    const changeFocus = (e) => {
      const parent = e.target.parentNode;
      parent.className = parent.className ? "" : "focused";
    };
  
    for (el of document.getElementsByTagName("input")) {
      const input = el;
      input.addEventListener("focus", changeFocus);
      input.addEventListener("blur", changeFocus);
    }
  }

