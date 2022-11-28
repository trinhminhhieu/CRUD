const case1 = () => {
    const currentObject = {
      a: "case1",
      b: [1],
    };//[[Prototype]]: Object

    // ...b toán tủ lây lan Spread syntax (...)

    const copyObject = { ...currentObject, copy: true }; //...currentObject sao chep tu currentObject cho biên copyObject
  
    console.log("copy", copyObject); //copy {a: 'case1', b: Array(1), copy: true}
  
    copyObject.b = [1, 2, 3]; //console.log(copyObject.b = [1, 2, 3]); => out:(3) [1, 2, 3] => copyObject = b: Array(3), currentObject giu nguyen
  
    console.log("sau khi sửa, copy:", copyObject);// sau khi sửa, copy: {a: 'case1', b: Array(3), copy: true}
    console.log("sau khi sửa, current:", currentObject);//sau khi sửa, current: {a: 'case1', b: Array(1)}
  };
// copy {a: 'case1', b: Array(1), copy: true}
// sau khi sửa, copy: {a: 'case1', b: Array(3), copy: true}
// sau khi sửa, current: {a: 'case1', b: Array(1)}


  const case2 = () => {
    const currentObject = {
      a: "case2",
      b: [1],
    };
    const copyObject = { ...currentObject, copy: true };//copy {a: 'case2', b: Array(1), copy: true}
  
    console.log("copy", copyObject);//copy {a: 'case2', b: Array(1), copy: true}
  
    copyObject.b.push(2, 3); //push day gia tri va0 mang =>mang moi b: [1,2,3]//console.log(copyObject.b.push(2, 3)) => out: 3 =>b: Array(3) [1,2,3]
  
    console.log("sau khi sửa, copy:", copyObject);//sau khi sửa, copy: {a: 'case2', b: Array(3), copy: true}
    console.log("sau khi sửa, current:", currentObject);// sau khi sửa, current: {a: 'case2', b: Array(3)}
  };
  
  
  case2();


  // Giải thích tại sao có sự khác nhau giữa case1 và case2
//   case1() //copyObject.b = [1, 2, 3];  b se la 3 mang moi,bây giờ b sẽ là một mảng với [1, 2, 3] phần tử duy nhất của nó.
//   khi đó ta có
//   console.log("sau khi sửa, copy:", copyObject);//b: Array(3) vì b: [1, 2, 3] 
//   console.log("sau khi sửa, current:", currentObject); //giữ nguyên b: Array(1) vì b: [1]

//   case2() //copyObject.b.push(2, 3) push() thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
//   khi đó mảng b từ copyObject,currentObject sẽ là b: [1,2,3]
//   khi đó ta có
//   console.log("sau khi sửa, copy:", copyObject);//b: Array(3) vì b : [1,2,3]
//   console.log("sau khi sửa, current:", currentObject);//b: Array(3) vì b : [1,2,3] 

//   =>kết luận case1 chỉ làm thay đổi mảng mới của đối tượng mới k làm thay đổi mảng gốc của đối tượng gốc
//   case2 mảng trong cả hai đối tượng bị thay đổi thành mảng mới khi dùng phương thức push()