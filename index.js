//Cuando todo el html este cargado, se va a poder ejecutar codigo js
document.addEventListener('DOMContentLoaded', function () {
    const btnAdd = document.getElementById('add');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    let id = 1;

    function removeTodo(id) {
        console.log(id)
        document.getElementById(id).remove();
    }

    function addTodo() {
        if (title.value === '' || description.value === '') {
            alert.innerText = 'Se requiere título y descripción'
            alert.classList.remove('d-none')
            return
        }

        alert.classList.add('d-none')

        const row = table.insertRow()
        row.setAttribute('id',id++)
        row.innerHTML =
            `<td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>                
            </td>`
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
        removeBtn.innerHTML = '<i <i class="fa fa-trash"></i>'
        removeBtn.onclick = (e) => {
            removeTodo(row.getAttribute('id'));
        }

        row.children[3].appendChild(removeBtn)
    }


    btnAdd.onclick = addTodo;
})