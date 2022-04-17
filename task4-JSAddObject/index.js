// Implement function that can “add” objects
const sumObj = (...rest) => rest.reduce((result, current) => {
    for(let key in current) {
        let value = current[key];

        if (result[key] === undefined){
            result[key] = value;
        }else {
            result[key] += value;
        }
    }

    return result;
}, {})

// Create additional function that can intersect object by property names and values
// example:
function per(obj1,obj2) {
    let res = {};
    for (let key in obj1) {
        for(let key2 in obj2){
            if(key === key2 && obj1[key] === obj2[key2]){
                res[key] = obj1[key]
            }
        }
    }
    return res;
}

