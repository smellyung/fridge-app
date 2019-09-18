function deleteDate(date, itemList, setItemList) {
    setItemList(itemList.filter(item => item.date !== date));
}
function deleteAll(setItemList) {
    setItemList([]);
}
function addItem(e, itemList, setItemList) {
    e.preventDefault();
    let name = e.target.children[1].value;
    let date = new Date(e.target.children[3].value);
    let toAdd = { name, date };
    // sort by expiry date rather than name

    let sorted = [...itemList, toAdd].sort((a, b) => a.date - b.date);
    console.log(sorted, 'SORTED');
    setItemList(sorted);
}

export { deleteDate, deleteAll, addItem };