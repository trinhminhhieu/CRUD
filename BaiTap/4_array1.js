
////////HOAFN THANH

const array1 = ["1","1", "2", "m", "5", "e", "6", "7", "8", "9", "a"];
const array2 = ["9", "a", "b", "c", "6", "4", "m"]; 

// Tìm kiếm các phần tử giống nhau của mảng 1 và mảng 2.
// không tính trên cùng 1 mảng
const findSameElement = (array1, array2) => {
    const duplicates = [...new Set(array1)] //loại bỏ phan tu trung lạp tren mang Ex: array1 = ["1","1"] => array1 = ["1"]
    
    const newArray = duplicates.concat(array2)
    console.log(newArray);

    const playx =  newArray.filter((item,i) => newArray.includes(item, i+1))
    // console.log(playx);

    return playx

 

};

console.log(findSameElement(array1,array2));

// hoàn thiện function findSameElement và đánh giá độ phức tạp của thuật toán.

// hoàn thiện function findSameElement và sử dụng Array.filter


// hoàn thiện function findSameElement và sử dụng Array.reduce

// với mỗi một prototype của Array (forEach, map, filter, find, include,...) được tính là một vòng for.
// Hãy hoàn thành function findSameElement mà không sủ dụng 2 hoăc nhiều hơn 2 vòng for lồng nhau
// Gợi ý: dùng cách lưu trữ giá trị của object   (object[key])