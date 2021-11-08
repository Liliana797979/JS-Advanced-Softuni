function solve() {
    /* # configure event listeners # */
    // select all buttons
    // first button -> table generation
    // second button -> buy furniture
    const table = document.querySelector('table.table tbody');
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    //console.log(input, output);

    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button', buy));
    //console.log(generateBtn, buyBtn);

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate(e) {
        const data = JSON.parse(input.value);
        //console.log(data);
            for (let item of data) {
                
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const decFactorCell = document.createElement('td');
        const imgTd = document.createElement('td');
        const checkCell = document.createElement('td');

        const img = document.createElement('td');
        img.src = item.img;
        imgCell.appendChild(img);

        const nameP = document.createElement('p');
        nameP.textContent = item.name;
        nameCell.appendChild(nameP);
        
        const priceP = document.createElement('p');
        priceP.textContent = item.decFactor;
        decFactorCell.appendChild(decP);
        
        const check = document.createElement('input');
        check.type = 'checkbox';
        checkCell.appendChild(check);

        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(decFactorCell);
        row.appendChild(checkCell);

        table.appendChild(row);

        }
    }

    /* # table generation */
    // read input JSON and parse it
    // for every array element, create table row
    


    /* # buy furniture */   
    function buy(e) {
        const furniture = Array
        .from(document.querySelector('input[type="checkbox"]:checked'))
        .map(b => b.parentElement.parentElement)
        .map(r => ({
            name: r.children[1].textContent,
            price: Number(r.children[2].textContent),
            decFactor: Number(r.children[3].textContent)
        }));
        
        let total = 0;
        let decFactor = 0;

        for (let item of furniture) {
            names.push(item.name);
            total += item.price;
            decFactor += item.decFactor;
        }
        const result = `Bought furniture: ${names.join(', ')}
    Total price: ${total.toFixed(2)}
    Average decoration factor: ${decFactor / furniture.length}`;

    output.value = result;
    }  
    // select all checkboxes
    // filter only checked checkboxes
    // repeat for every selected checkbox
    // -- select parent row
    // -- read item information
    // display output

}

function solve() {
    const [generateBtn, buyBtn] = document.getElementsByTagName("button")
    const [generateInput, buyOutput] = document.getElementsByTagName("textarea")
    const tableBody = document.querySelector("tbody")

    const htmlTemplate = ({ img, name, price, decFactor }) => {
        const row = document.createElement("tr")

        row.innerHTML = `<td><img src=${img}></td>
<td><p>${name}</p></td>
<td><p>${price}</p></td>
<td><p>${decFactor}</p></td>
<td><input type="checkbox"/></td>`

        return row
    }

    const generate = () =>
        JSON.parse(generateInput.value).forEach(x =>
            tableBody.appendChild(htmlTemplate(x))
        )

    const buy = () => {
        const braindeadData = Array.from(
            tableBody.querySelectorAll("input[type=checkbox]:checked")
        ).map(x =>
            Array.from(x.parentNode.parentNode.children)
                .slice(1, 4)
                .map(
                    x =>
                        Number(x.children[0].innerHTML) ||
                        x.children[0].innerHTML
                )
        )
        const getSum = arr => arr.reduce((a, v) => a + v, 0)

        const names = braindeadData.map(x => x[0]).join(", ")
        const prices = getSum(braindeadData.map(x => x[1]))
        const avFactors =
            getSum(braindeadData.map(x => x[2])) / braindeadData.length

        buyOutput.value = `Bought furniture: ${names}
Total price: ${prices.toFixed(2)}
Average decoration factor: ${avFactors}`
    }

    generateBtn.addEventListener("click", generate)
    buyBtn.addEventListener("click", buy)
}

