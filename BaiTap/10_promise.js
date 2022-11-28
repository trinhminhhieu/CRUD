// examp Promise
const myFirstPromise = new Promise((resolve, reject) => {
    console.log("bắt đầu chờ");
    const condition = true; // false
    if (condition) {
      setTimeout(function () {
        resolve("Hoàn thành"); // fulfilled
      }, 1000);
    } else {
      reject("có lỗi");
    }
  });
  
//su dung loi hua
//dau tien myFirstPromise kiem tra xem co Lỗi hay khong neu ok thi ok
//sau 1 giay thi ket qua hoan thanh,neu co loi tra ve loi

  myFirstPromise
    .then((successMsg) => {
      console.log("ok");
      console.log(successMsg);
    })
    .catch((errorMsg) => {
      console.log("trường hợp có lỗi");
      console.log(errorMsg);
    });
  
  // đọc hiểu

  //Promise() đại diện cho sự hoàn thành cuối cùng (hoặc lỗi) của một hoạt động không đồng bộ và giá trị kết quả của nó.
  //dac diem nhạn biet là Promise((resolve, reject)) , .then .catch