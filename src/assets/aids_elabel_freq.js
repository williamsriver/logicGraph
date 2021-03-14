let content = "0,134979\n" +
    "1,24004\n" +
    "3,113641\n" +
    "2,1327\n";
let data = content.split('\n');
let tableData = [];
data.forEach(item=>{
    let props = item.split(',');
    tableData.push({label: props[0], amount:props[1]});
})
export default tableData;