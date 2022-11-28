const data = [
  { id: 37, namme: 'Hệ thống', parentId: 0, status: 1 },
  { id: 282, namme: 'Nhóm sản phẩm', parentId: 37, status: 1 },
  { id: 289, namme: 'Thương hiệu', parentId: 37, status: 1 },
  { id: 290, namme: 'Chi nhánh', parentId: 37, status: 1 },
  { id: 307, namme: 'Giao dịch', parentId: 0, status: 1 },
  { id: 310, namme: 'Báo cáo', parentId: 0, status: 1 },
  { id: 329, namme: 'Hàng hóa', parentId: 310, status: 1 },
  { id: 312, namme: 'Tài khoản ngân hàng', parentId: 37, status: 1 },
  { id: 313, namme: 'Sản phẩm chất luợng cao', parentId: 282, status: 1 },
  { id: 314, namme: 'Thương hiệu quốc tế', parentId: 289, status: 1 },
];


const generateData = function (data) {
  const parentObjects = data.filter(el => el.parentId === 0);

  const finalData = parentObjects.map(el => {
    const newEl = { ...el, children: [] };
    data.forEach(item => {
      if (item.parentId === el.id) newEl.children.push(item);
    });

    return newEl;
  });

  return finalData;
};

const newData = generateData(data);
console.log(JSON.stringify(newData));