/*
getcursorposition获取光标在表单中的位置
参数obj是表单元素
返回正整数
*/
function getcursorposition(obj){ 
	var result = 0; 
	if(obj.selectionStart){ //IE以外 
		result = obj.selectionStart 
	}else{ //IE 
		var rng; 
		if(obj.tagName == "textarea"){ //TEXTAREA 
			rng = event.srcElement.createTextRange(); 
			rng.moveToPoint(event.x,event.y); 
		}else{ //Text 
			rng = document.selection.createRange(); 
		} 
		rng.moveStart("character",-event.srcElement.value.length); 
		result = rng.text.length; 
	} 
	return result; 
}