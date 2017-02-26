//创建AJAX连接
function  ajaxcomm (array) {
	//创建ajax实例
	var xmlHttp=null;
	try{
	 	// Firefox, Opera 8.0+, Safari
	 	xmlHttp=new XMLHttpRequest();
	 } catch (e) {
	 	// Internet Explorer
	 	try {
	  		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	  	} catch (e) {
	  		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	  	}
	}
	//设置当连接发生变化时运行的函数
	xmlHttp.onreadystatechange=ajaxtodo;
	//设置发送地址
	var phpfile;
	if (mode == "map") {
		if (mapselecttype == "o" && command != "nodeclose" && command != "nodeopen") {
			 phpfile = "node/object/data/";
		}
		if (command == "nodeclose" || command == "nodeopen") {
			phpfile = "node/data/";
		}
	} else if (mode == "classpaneledit" || mode == "classpanelselect") {
		phpfile = "node/class/panel/data/";
	}
	phpfile += command + ".php";
	//设置发送方式
	xmlHttp.open("POST",phpfile,true)
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
	//设置发送内容
	var value = JSON.stringify(array);
	data="value=" + value
	//发送
	xmlHttp.send(data)
	//当成功接收到回执时
	function ajaxtodo() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
			//获取返回值
			var ajaxvalue = xmlHttp.responseText;
			if (mode == "map") {
				if (mapselecttype == "o") {
					if (command == "objectcreatefirst") {
						objectcreatefirstsocket(ajaxvalue)
					} else if (command == "objectcreateright") {
						objectcreaterightsocket(ajaxvalue)
					} else if (command == "objectcreatedown") {
						objectcreatedownsocket(ajaxvalue)
					} else if (command == "objectdeleteall") {
						objectdeleteallsocket(ajaxvalue)
					}
				}
				if (command == "nodeclose") {
					nodeclosesocket(ajaxvalue)
				} else if (command == "nodeopen") {
					nodeopensocket(ajaxvalue)
				}
			} else if (mode == "classpaneledit" || mode == "classpanelselect") {
				if (mode == "classpaneledit") {
					if (command == "createclasspanel") {
						classpanel(ajaxvalue)
					} else if (command == "classpanelcreatefirstmode") {
						classpanelcreatefirstmodesocket(ajaxvalue)
					} else if (command == "classpanelcreatefirstif") {
						classpanelcreatefirstifsocket(ajaxvalue)
					} else if (command == "classpanelcreatefirst") {
						classpanelcreatefirstsocket(ajaxvalue)
					} else if (command == "classpanelcreatefirstmode") {
						classpanelcreatemodesocket(ajaxvalue)
					} else if (command == "classpanelcreatedown") {
						classpanelcreatedownsocket(ajaxvalue)
					} else if (command == "classpanelcreateright") {
						classpanelcreaterightsocket(ajaxvalue)
					} else if (command == "classpanelcreateif") {
						classpanelcreateifsocket(ajaxvalue)
					}
				} else if (mode == "classpanelselect") {
					if (command == "classpanelchangeextend") {
						classpanelchangeextendsocket(ajaxvalue)
					}
				}
				if (command == "classpanelchangeclassmode") {
					classpanelchangeclassmodesocket(ajaxvalue)
				} else if (command == "classpanelclearclassmode") {
					classpanelclearclassmodesocket(ajaxvalue)
				}
			}
		}
	}
}