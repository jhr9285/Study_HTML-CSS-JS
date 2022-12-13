/*
	숙제
	
	비밀번호 형식
	==> 
		첫문자는 소문자로 시작하고
		소문자, 대문자, 숫자, 특수문자(@#$%*_!?)를 각각 한개 이상 포함해야 한다.

*/

// Q. reset 버튼 기능 구현
	document.getElementById('rbtn').onclick = function(){
		document.getElementById('id').value = '';
		document.getElementById('pw').value = '';
	};
	
// Q. login 버튼 기능 구현
	document.getElementById('lbtn').onclick = function(){
		// 할일
		// 1. 입력내용 읽어오고
		var sid = document.frm.id.value;
		var spw = document.frm.pw.value;
		// 2. 데이터 유효성 검사하고
		// 2-1. 입력되어있는지 검사하고
		if(!sid){
			document.frm.id.focus();
			return;
		}
		if(!spw){
			document.frm.pw.focus();
			return;
		}
		// 2-2. 형식에 맞게 입력되었는지 검사하고 (정규 표현 검색 옵션 ; 형식 검사)
		// 맞춰야 하는 아이디(입력값;value) 형식 : 첫 문자는 알파벳 소문자로 하고 알파벳과 숫자로 이루어진 5글자 이상 10글자 이하
		var idPattern = new RegExp('^[a-z][a-zA-Z0-9]{5,10}$'); // ^[a-z] : 첫글자가 알파벳소문자여야 한다, /[a-zA-Z0-9]{5,10}$ : 마지막 글자가 알파벳소문자,대문자,숫자 중 하나여야 하고 총 글자수가 5 이상 10 이하여야 한다.
		var idResult = idPattern.test(sid);
		
		if(!idResult){ // 아이디 형식 검사 반환값이 true가 아니면 ==> 아이디가 형식에 맞지 않으면
			document.frm.id.value = ''; // 쓴 값 지우기
			document.frm.id.focus(); // 다시 입력하라고 유도
			return;
		}
		
		// 맞춰야 하는 비밀번호 형식 : 숫자 '12345'만 허용.
		var pwPattern = /^12345$/; // 첫글자 1, 마지막글자 5, 내용 234 여야 한다
		var pwResult = pwPattern.test(spw);
		
		if(!pwResult){
			document.getElementById('pw').value = '';
			document.getElementById('pw').focus();
			return;
		}
		
		// 이름 유효성 검사
		var sname = document.getElementById('name').value;
		if(!sname){
			alert('이름을 입력하세요.');
			document.getElementById('name').focus();
			return;
		}
		
		var namePattern = /^[가-힣]{2,10}$/; // 한글 범위는 가-힣 으로 표기
		var nameResult = namePattern.test(sname);
		
		if(nameResult == false){
			alert('이름 입력 형식이 맞지 않습니다.');
			document.frm.name.value = '';
			document.frm.name.focus();
			return;
		}
		
		// 이메일 유효성 검사
		var smail = document.getElementById('mail').value;
		if(!smail){
			alert('이메일을 입력하세요.');
			document.getElementyById('mail').focus();
			return;
		}
		
		var mailPattern = /^[a-z][0-9a-zA-Z_.#]{5,9}@[0-9a-zA-Z]{3,10}[.][a-z]{2,3}(\.[a-z]{0,2})?$/; // . : 모든 문자의 형식을 나타냄 => \. : 그냥 문자로서의 점을 의미함
		var mailResult = mailPattern.test(smail);
		if(!mailResult){
			alert('이메일 입력 형식이 잘못되었습니다.');
			document.getElementById('mail').value = '';
			document.getElementById('mail').focus();
			return;
		}
		
		// 전화번호 유효성 검사
		var stel = document.getElementById('tel').value;
		if(!stel){
			alert('전화번호 입력은 필수입니다.');
			document.getElementById('tel').focus();
			return;
		}
		
		var telPattern = new RegExp('^0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$');
		// 첫글자는 무조건 0이고 두번째글자는 0-9 사이 숫자가 1개 이상 2개 이하 와야 됨,
		// - 들어가고, 숫자는 3글자이상 4글자이하 와야 됨,
		// - 들어가고, 숫자 무조건 4글자 와야 됨, 그리고 끝
		
		var telResult = telPattern.test(stel);
		if(!telResult){
			alert('전화번호 형식이 잘못되었습니다.');
			document.getElementById('tel').value = '';
			document.getElementById('tel').focus();
			return;
		}
		
		if(confirm('전송하시겠습니까?')){ // confirm : 확인 창 띄워주는 함수. 반환값은 true, false
			alert('전송이 진행중입니다.');
		} else {
			alert('전송이 취소되었습니다.');
		}
		
		// 3. 폼 전송하기
		/* document.frm.submit();  */
	};
	