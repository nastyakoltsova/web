document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("wishForm");
    let dataTable = document.getElementById("wishTable");

    function createDeleteButton() {
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<span class=\"material-symbols-outlined\">delete</span>";
        return deleteButton;
    }

    function setupDeleteButton(button) {
        button.onclick = function() {
            let row = button.closest("tr");
            dataTable.deleteRow(row.rowIndex);
            saveTable();
        };
    }

    function addDeleteButtonsToExistingRows() {
        let rows = dataTable.rows;
        for (let i = 1; i < rows.length; i++) {
            let deleteCell = rows[i].cells[2];
            if (!deleteCell.hasChildNodes()) {
                let deleteButton = createDeleteButton();
                setupDeleteButton(deleteButton);
                deleteCell.appendChild(deleteButton);
            } else {
                setupDeleteButton(deleteCell.firstChild);
            }
        }
    }

    function saveTable() {
        localStorage.setItem("wishTableData", dataTable.innerHTML);
    }

    function restoreTable() {
        let storedTable = localStorage.getItem("wishTableData");
        if (storedTable) {
            dataTable.innerHTML = storedTable;
            addDeleteButtonsToExistingRows();
        }
    }

    restoreTable();

    form.onsubmit = function(event) {
        event.preventDefault();

        let product = document.getElementById("product").value;
        let budget = document.getElementById("budget").value;

        let newRow = dataTable.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let deleteCell = newRow.insertCell(2);

        cell1.textContent = product;
        cell2.textContent = budget;

        let deleteButton = createDeleteButton();
        setupDeleteButton(deleteButton);
        deleteCell.appendChild(deleteButton);

        form.reset();
        saveTable();
    };
});
