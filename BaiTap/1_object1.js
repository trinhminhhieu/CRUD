const example1 = () => {
    const key1 = "userName";
    const key2 = "password";
    const object1 = { a: 1, [key1]: "ngocnk99" }; // [key1]: "ngocnk99" => [username]: "ngock99"
  
    console.log("object1", object1);
  
    object1[key2] = "123456"; //{ a: 1, [key1]: "ngocnk99", password: "123456" }
    console.log("object1", object1);
  };
 
  example1()
//  object1 {a: 1, userName: 'ngocnk99'}
//  object1 {a: 1, userName: 'ngocnk99', password: '123456'}

//forEach() vong lap nang cao ES6
const example2 = () => {
    const object2 = { 0: "a", 1: "b", 2: "c" }; //manng cac doi tuong
    object2.length = 3; //do dai toi da = 3
  
    object2.__proto__.forEach = Array.prototype.forEach; //cac doi tuong tich hop tieu chun cua mang
  
    object2.forEach((element, index) => {
      console.log(`index ${index} : ${element}`); //index 0 : a, index 1 : b, index 2 : c
    });
  };

  example2()
// index 0 : a
// index 1 : b
// index 2 : c