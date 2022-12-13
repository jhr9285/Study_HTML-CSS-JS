$(document).ready(function(){
	/* BACK 버튼 클릭이벤트 */
	$('#e1btn').click(function(){
		$(location).attr('href', './ex01.html');
	/*  location.href = './ex01.html';  */
	});
	
	/* 파라미터 내용 출력 클릭이벤트 (애니메이션 들어감) */
	$('#printbtn').click(function(){
		// 기존 태그 먼저 감추기
		$('#rfr').stop().slideUp(300, function(){  // 300 (0.3초) : 효과가 지속되는 시간. 슬라이드가 올려지는 타이밍.
			var param = $(location).attr('search');
			param = param.substring(1);
			
			var data = {};
			var arr = param.split('&');
			for(var i = 0; i < arr.length; i++){
				var tmp = arr[i].split('=');
				data[tmp[0]] = tmp[1];
			}
			
			$('#rid').html(data['id']);  // data 연관배열의 id 라는 키값이 인덱스인 데이터를 꺼낸다
			$('#rpw').html(data['pw']);  // data 연관배열의 pw 라는 키값이 인덱스인 데이터를 꺼낸다
	
		});
	
		$('#rfr').attr('display', 'block');
		$('#rfr').slideDown(500); // 500 (0.5초) : 효과가 지속되는 시간. 슬라이드가 내려가는 타이밍.
	});
	
});