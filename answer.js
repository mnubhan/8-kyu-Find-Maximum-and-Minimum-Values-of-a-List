var min = function(list){    
    return list.sort((x, y) => x - y)[0];
}

var max = function(list){
    return list.sort((x, y) => y - x)[0];
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
