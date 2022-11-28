//HOAN THANH

const object1 = { 3: "c", 1: "a", 2: "b" };
const object2 = { 2: "b", 1: "a", 3: "c" };


const compares = (object1, object2) => {
    for(var p in object1){
        if(object1.hasOwnProperty(p)){
            if(object1[p] !== object2[p]){
                return false;
            }
        }
    }
    for(var p in object2){
        if(object2.hasOwnProperty(p)){
            if(object1[p] !== object2[p]){
                return false;
            }
        }
    }
    return true;
};

console.log(compares(object1, object2)); //true => hai doi tuong bang nhau


// Kiểm tra 2 object có giống nhau hay không

// hoàn thiện function checkObject và đánh giá độ phức tạp của thuật toán.
//=> Thuat toan khong qua phuc tap

// Tìm cách hoàn hiện function một cách ngắn nhất.
const comPare = (object1,object2) => {
    if (JSON.stringify(object1) === JSON.stringify(object2)) {
        return true
    } else {
        return false
    }
}
console.log(comPare(object1,object2));

//JSON.stringify(object1) === JSON.stringify(object2); //true
