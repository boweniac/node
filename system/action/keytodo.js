//==========键盘动作==========
function keytodo(event) {
	//获取键盘码，并在日至中打印
	var keycodevalue = event.keyCode;
	console.log("keycodevalue:" + keycodevalue);
	//判断动作状态
	//动作状态为：首页顶部输入表单获得焦点
	if (actionstatus == 1) {
		if (65 <= keycodevalue && keycodevalue <= 90) {
			console.log("abc:" + keycodevalue);
		} else if (keycodevalue == 37) {
			//判断光标在首页顶部表单中的位置是否在最左侧
			if (cursorposition == 0) {
				console.log("left");
			}
		}
		//存储新的光标位置
		cursorposition = topinputhtml.selectionStart;
	}
}
