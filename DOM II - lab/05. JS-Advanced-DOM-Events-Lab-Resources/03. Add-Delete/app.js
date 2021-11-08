function addItem() {
    let list = document.getElementById('items')
    list.addEventListener('click', deleteItem)

    let newItemText = document.getElementById('newText')
    let newItem = document.createElement('li')
    newItem.innerHTML = `${newItemText.value} <a href="#">[Delete]</a>`
    list.appendChild(newItem)
    newItemText.value = ''

    function deleteItem(item) {
        let element = item.target.parentNode
        element.remove()
    }
}

function addItem() {
    // Select input field and read value
    const input = document.getElementById('newItemText');
    console.log(input);
    // Create new <li> element and set its content to input value
   const liElement = document.createElement('li');
   liElement.textContent = input.value;

   // create delete button
   const button = document.createElement('a');
   button.href = '#';
   button.textContent = [Delete];
    button.addEventListener('click', removeElement);
   liElement.appendChild(button);
    // Select <ul>  and append new <li> element
    document.getElementById("items").appendChild(liElement);
    // Nice-to-have: clear input field 
    input.value = '';

    function removeElement(ev) {
        const parent = ev.target.parentNode
        parent.remove();
    }
}

function solve() {
      let newElement = document.getElementById("newText").value;
      let list = document.getElementById("items");
    if (newElement.length === 0) return;
    let listItem = document.createElement("li");
      listItem.textContent = newElement;
    let remove = document.createElement("a");
      let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
      remove.href = "#";
      remove.addEventListener("click", deleteItem);
    
      listItem.appendChild(remove);
      list.appendChild(listItem);
    
      function deleteItem() {
        listItem.remove();
      }
    }

    



