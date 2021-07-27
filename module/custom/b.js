// 步骤1:定义
function add () {//普通命名函数
    console.log('this is add');
}
const del= ()=> {//变量=箭头函数
    console.log('this is del');
}
const edit = function(){//变量=匿名函数
    console.log('this is edit');
}
function select () {
    console.log('this is select');
}
// 步骤2:导出
module.exports.add = add;
module.exports.del = del;
// 快捷方式
exports.edit = edit;
exports.select = select;
