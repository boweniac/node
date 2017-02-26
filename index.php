<!DOCTYPE html>
<html>
	<head>
		<!--浏览器采用utf-8编码-->
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
		<!--引入全局变量-->
		<script type="text/javascript" src="/system/config/globalvariable.js"></script>
		<!--引入键盘事件-->
		<script type="text/javascript" src="/system/action/keytodo.js"></script>
		<!--引入状态切换-->
		<script type="text/javascript" src="/system/action/status.js"></script>
	</head>
	<body onkeyup="keytodo(event)">
	<!--创建顶部输入表单
	onfocus：获得焦点时执行
	onclick：点击表单时执行
	onblur：失去焦点时执行
	-->
	<input id="topinput" type="text" autocomplete="off" onfocus="topinputgetfocus(this)" onclick="topinputonclick(this)" onblur="topinputlosefocus()"></input>
	</body>
</html>