
//hoan thanh=p          
const tree = [
  { fileName: "homepage.css", path: "static/css/homepage.css" },
  { fileName: "login.css", path: "static/css/login.css" },
  { fileName: "info.css", path: "static/css/info.css" },
  { fileName: "icon.svg", path: "static/image/icon.svg" },
  { fileName: "homepage.js", path: "src/components/homepage.js" },
  { fileName: "login.js", path: "src/components/login.js" },
  { fileName: "info.js", path: "src/components/info.js" },
  { fileName: "index.js", path: "src/index.js" },
];


let result = [];
let level = {result};
let prevName = ""

function search(nameKey, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].folderName === nameKey) {
            return i;
        }
    }
}

function searchSecond(nameKey, myArray){
    for (let i=0; i < myArray.folders.length; i++) {
        if (myArray.folders[i].folderName === nameKey) {
            return i;
        }
    }
}

tree.forEach((item, index) => {
  item.path.split('/').reduce((r, name, i, a) => {
    if(!r[name]) {
      r[name] = {result: []};
      if (name.includes(".")) {
          if (a.length === 3) {
             const firstIndex = search(a[0], level.result)
            const secondIndex = searchSecond(a[1], level.result[firstIndex])
            level.result[firstIndex].folders[secondIndex].file.push(name)
          } else if (a.length === 2) {
            const firstIndex = search(a[0], level.result)
            level.result[firstIndex].file.push(name)
          }
      } else {
        let prevName = "";
          if (!name.includes(".")) {
          const newName = a[i-1];
            if (newName !== undefined) {
              prevName =  newName + "/" }
            console.log('prevName', prevName)       
          }
      
        
        r.result.push({folderName: name, path: prevName, file: [], folders: r[name].result});
      }

    } else if (i === a.length - 1) {
      //r.result.push({name, children: []});
    }
    return r[name];
  }, level)
})
console.log('result', result);

///

const tree1 = [
  {
    folderName: "static",
    path: "",
    file: [],
    folders: [
      {
        folderName: "css",
        path: "static/",
        file: ["homepage.css", "login.css", "info.css"],
        folders: [],
      },
      {
        folderName: "image",
        path: "static/",
        file: ["icon.svg"],
        folders: [],
      },
    ],
  },
  {
    folderName: "src",
    path: "",
    file: ["index.js"],
    folders: [
      {
        folderName: "components",
        path: "src/",
        file: ["homepage.js", "login.js", "info.js"],
        folders: [],
      },
    ],
  },
];