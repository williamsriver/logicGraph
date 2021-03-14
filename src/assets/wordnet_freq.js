let content = "0,63098\n" +
    "1,4454\n" +
    "2,2560\n" +
    "4,6632\n" +
    "3,109";
let data = content.split('\n');
let tableData = [];
data.forEach(item=>{
    let props = item.split(',');
    tableData.push({label: props[0], amount:props[1]});
})
export default tableData;