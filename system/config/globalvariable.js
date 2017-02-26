/*
动作状态
1：首页顶部输入表单获得焦点
2：首页顶部输入表单失去焦点
*/
var actionstatus;

//首页顶部输入表单
//存储首页顶部输入表单元素
var topinputhtml;
//存储首页顶部输入表单光标位置
var cursorposition;
//存储首页顶部输入表单相关信息
var topinputarray = new Array();
topinputarray["tag"] = new Array();//存储输入表单左侧标签
topinputarray["value"] = "";//存储输入表单中的值