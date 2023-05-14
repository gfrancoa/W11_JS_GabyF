function createItem(item){
        return "<li>" + item + "</li>";
}

function createList(arr){
    let fragment='';
    for (let i = 0; i < arr.length; i++) {
        fragment +=createItem(arr[i]);
    }
    return fragment;
}