const title = document.querySelector(`#title`)
const dueDate = document.querySelector(`#due_date`)
const addBtn = document.querySelector(`#addBtn`)
const list = document.querySelector(`#list`)
const obj = []
let arrayObj = JSON.parse(localStorage.getItem('array')) || [];

console.log(arrayObj)

addBtn.addEventListener('click', () => {
    newItem={
        title: title.value,
        date: dueDate.value
    }
    obj.push (newItem)
    console.log({obj});
    arrayObj.push(newItem);
    localStorage.setItem('array', JSON.stringify(arrayObj))
    list.innerHTML += `<tr>
                          <td>${title.value}</td>
                          <td>${dueDate.value}</td>
                      </tr>`

})
if (arrayObj.length > 0) {
    arrayObj.forEach(element => {
         list.innerHTML +=`<tr>
                        <td>${element.title}</td>
                        <td>${element.date}</td>
                    </tr>`
    });
}
// localStorage.clear()
