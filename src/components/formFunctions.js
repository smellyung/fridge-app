function deleteDate(item, setItemList) {
    const { name, expiryDate } = item;
    //DELETE from db
    fetch('/rest/products', {
        method: 'delete',
        body: JSON.stringify({ name, expiryDate }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).then((response) => response.json())
    .then((dbItemList) => {
        if (dbItemList.length > 0) {
            sortItems(dbItemList, setItemList);
        }
    })
    
}
function deleteAll(setItemList) {
    fetch('/rest/products/deleteAll', {
        method: 'delete',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).then((response) => response.json())
    .then((dbItemList) => {
        setItemList(dbItemList)
    })
}
function addItem(e, itemList, setItemList) {
    e.preventDefault();
    let name = e.target.children[1].value;
    let expiryDate = new Date(e.target.children[3].value);

    //POST product to db
    fetch('/rest/products', {
        method: 'post',
        body: JSON.stringify({ name, expiryDate }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then((response) => response.json())
    .then((dbItemList) => {
        console.log(dbItemList, 'dbItemList')
        if (dbItemList.length > 0) {
            sortItems(dbItemList, setItemList);
        }
    })
}

function sortItems(items, setItemList) {
    let sorted = items.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
    setItemList(sorted);
}

export { deleteDate, deleteAll, addItem, sortItems };