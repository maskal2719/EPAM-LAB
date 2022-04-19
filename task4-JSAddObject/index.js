let obj1 = {x:1,y:3,j:142,abc:124};
let obj2 = {x:1,j:142,y:3,abc:124};
let obj3 = {j:142,x:1,y:3,abc:124,g:1234};
let obj4 = {x:1,y:3,abc:12,j:142};
let obj5 = {j:142,x:1,y:3,abc:124,g:1234};
let obj6 = {x:1,y:3,abc:14,j:142};
let obj7 = {x:1,j:142,y:3,abc:124};

// Implement function that can “add” objects
const sumObj = (...rest) => rest.reduce((result, current) => {
    for(let key in current) {
        let value = current[key];
        result[key] = result[key] ? result[key] + value : value;
    }
    return result;
}, {})

// Create additional function that can intersect object by property names and values
const intersect = (...rest) => rest.reduce((result, current) => {
    let res = {};
    for(let key in result) {
        for(let key2 in current){
            if(key === key2 && current[key] === result[key]){
                res[key] = current[key];
            }
        }
    }
    return res;
})

