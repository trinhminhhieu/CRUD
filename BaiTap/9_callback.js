
//   callback là hàm chồng hàm
function printString(text) {
    console.log("start");
    setTimeout(function () {
      // callback
      console.log("text", text);
    }, 1000);
    console.log("end1");
  }
  
  printString("hello");
  
///thư tự start => end1 = > text hello
//vì text hello mất thời gian chờ 1 giây nên sẽ đc gọi cuối cùng


  // examp Promise//như câu 10 đã giải thích
  const myFirstPromise = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(function () {
        resolve("Promise is resolved!"); // fulfilled //chạy đầu tiên
      }, 300);
    } else {
      reject("Promise is rejected!");
    }
  });
  
  myFirstPromise
    .then((successMsg) => {
      console.log(successMsg); 
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
  
  // đọc hiểu
