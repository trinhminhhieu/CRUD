

//HOÀN THÀNH

const mydata = [
    { id: 37, namme: "Hệ thống", parentId: 0, status: 1 },
    { id: 282, namme: "Nhóm sản phẩm", parentId: 37, status: 1 },
    { id: 289, namme: "Thương hiệu", parentId: 37, status: 1 },
    { id: 290, namme: "Chi nhánh", parentId: 37, status: 1 },
    { id: 307, namme: "Giao dịch", parentId: 0, status: 1 },
    { id: 310, namme: "Báo cáo", parentId: 0, status: 1 },
    { id: 329, namme: "Hàng hóa", parentId: 310, status: 1 },
    { id: 312, namme: "Tài khoản ngân hàng", parentId: 37, status: 1 },
  ];
  
const idMapping = mydata.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});
// console.log(idMapping);
// let root;
mydata.forEach((el) => {
    // kiểm tra nếu parentId chứa null
    // if (el.parentId === null) {
    //   root = el;
    //   return;
    // }
    // const parentEl = mydata[idMapping[el.parentId]];
    const parentEl = mydata.find(parent=>parent.id===el.parentId)

    if(parentEl)  {parentEl.children = [...(parentEl?.children || []), el]}
    console.log('parentEl', parentEl);
  });
  

  // Hoàn thanh function createTree để tạo 1 tree 2 cấp , kết quả giống như bên dưới
  
  const tree = [
    {
      id: 37,
      namme: "Hệ thống",
      parentId: 0,
      status: 1,
      children: [
        { id: 282,namme: "Nhóm sản phẩm", parentId: 37,status: 1, children: [],},
        { id: 289, namme: "Thương hiệu", parentId: 37, status: 1, children: [] },
        { id: 290, namme: "Chi nhánh", parentId: 37, status: 1, children: [] },
        { id: 312,namme: "Tài khoản ngân hàng",parentId: 37,status: 1,children: [],
        },
      ],
    },
    { id: 307, namme: "Giao dịch", parentId: 0, status: 1, children: [] },
    {
     id: 310,namme: "Báo cáo",parentId: 0,status: 1,
     children: [
        { id: 329, namme: "Hàng hóa", parentId: 310, status: 1, children: [] },
      ],
    },
  ];