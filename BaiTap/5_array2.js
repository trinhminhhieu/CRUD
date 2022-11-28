
//hoan thanh

const data = [
    { id: 37, namme: "Hệ thống", parentId: 0, status: 1 },
    { id: 282, namme: "Nhóm sản phẩm", parentId: 37, status: 1 },
    { id: 289, namme: "Thương hiệu", parentId: 37, status: 1 },
    { id: 290, namme: "Chi nhánh", parentId: 37, status: 2 },
    { id: 307, namme: "Giao dịch", parentId: 0, status: 0 },
    { id: 310, namme: "Báo cáo", parentId: 0, status: 0 },
    { id: 329, namme: "Hàng hóa", parentId: 310, status: 0 },
    { id: 312, namme: "Tài khoản ngân hàng", parentId: 37, status: 0 },
    { id: 313, namme: "Sản phẩm chất luợng cao", parentId: 282, status: 2 },
    { id: 314, namme: "Thương hiệu quốc tế", parentId: 289, status: 1 },
  ];
  
  
  const groupBy2 = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]] : [...(result[item[key]] || []), item],
      }), 
    {},
  );
  const resultGroup2 = groupBy2(data, 'status');
  
  const finalData = Object.entries(resultGroup2).map(el => ({
    status: el[0],
    list: el[1]
  }))
  
  console.log(finalData) 
  //dùng console google chrome để biết chính xác kết quả




// trả ra đúng kết quả như này
  //----------------
  const tree = [
    {
      status: 2,
      list: [
        { id: 290, namme: "Chi nhánh", parentId: 37, status: 2 },
        { id: 313, namme: "Sản phẩm chất luợng cao", parentId: 282, status: 2 },
      ],
    },
    {
      status: 1,
      list: [
        { id: 37, namme: "Hệ thống", parentId: 0, status: 1 },
        { id: 282, namme: "Nhóm sản phẩm", parentId: 37, status: 1 },
        { id: 289, namme: "Thương hiệu", parentId: 37, status: 1 },
        { id: 314, namme: "Thương hiệu quốc tế", parentId: 289, status: 1 },
      ],
    },
    {
      status: 0,
      list: [
        { id: 307, namme: "Giao dịch", parentId: 0, status: 0 },
        { id: 310, namme: "Báo cáo", parentId: 0, status: 0 },
        { id: 329, namme: "Hàng hóa", parentId: 310, status: 0 },
        { id: 312, namme: "Tài khoản ngân hàng", parentId: 37, status: 0 },
      ],
    },
  ];