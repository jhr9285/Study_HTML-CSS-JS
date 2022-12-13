/*
	Q.
	result.html 에서는 전달받은 데이터(파라미터)를 꺼내서 출력하시오.
*/
	document.write('<h2 class="w3-content w3-blue w3-center mxw500">result</h2>');
	var result = location.search;
	result = result.substring(1);
	
	var result2 = result.split('&');
	
	var result3 = {};
	var keys = [];
	for(var i = 0; i < result2.length; i++){
		var tmp = result2[i];
		var arr = tmp.split('=');
		var key = arr[0];
		var data = arr[1];
		keys.push(key);
		result3[key] = data;
		document.write('<div class="w3-content w3-center w3-lime mxw500">');
		document.write(keys[i] + ' : ' + result3[keys[i]] + '<br>');
		document.write('</div>');
	}
	
	