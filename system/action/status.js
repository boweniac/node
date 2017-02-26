/*
首页顶部输入表单，焦点状态
topinputgetfocus：获取焦点时调用,参数obj为输入表单元素
topinputonclick：点击输入表单时调用
topinputlosefocus：失去焦点时调用
*/
function  topinputgetfocus (obj) {
	//将动作状态设为：首页顶部输入表单获得焦点
	actionstatus = 1;
	//将首页顶部输入表单元素存入全局变量
	topinputhtml = obj;
}

function  topinputonclick (obj) {
	//获得首页顶部输入表单光标位置
	cursorposition = obj.selectionStart;
}

function  topinputlosefocus () {
	//将动作状态设为：首页顶部输入表单失去焦点
	actionstatus = 2;
}