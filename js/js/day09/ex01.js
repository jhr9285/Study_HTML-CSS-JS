/* 
	Q.
	confirm 버튼 클릭 시,
	정보 입력 화면의 입력창에 입력된 내용을 지우고, 정보 입력 화면이 사라지고, 정보 확인 화면이 나타나게 하시오.
	그 정보 확인 화면에는 아이디와 암호가 작성되어 있어야 합니다.
*/	
	var sidCheck = '';
	var spwCheck = '';
	
	document.getElementById('cbtn').onclick = function() {
		sidCheck = document.getElementById('sid').value;
		spwCheck = document.getElementById('spw').value;
		
		if(!sidCheck){
			sidCheck = '';
			alert('아이디가 입력되지 않았습니다.');
			return;
		}
		if(!spwCheck){
			spwCheck = '';
			alert('암호가 입력되지 않았습니다.');
			return;
		}
		
		document.getElementById('pid').innerHTML = sidCheck;
		document.getElementById('ppw').innerHTML = spwCheck;
		sidCheck = '';	
		spwCheck = '';	
		document.getElementById('fr1').style.display = 'none';
		document.getElementById('fr2').style.display = 'block';
	};
	
/*	Q.
	back 버튼 클릭 시,
	정보 확인 화면의 아이디와 암호를 지우고, 정보 확인 화면이 사라지고, 정보 입력 화면이 나타나게 하시오.
*/	
	document.getElementById('bbtn').onclick = function(){
		document.getElementById('pid').innerHTML = '';
		document.getElementById('ppw').innerHTML = '';
		document.getElementById('fr2').style.display = 'none';
		document.getElementById('fr1').style.display = 'block';
		
	};
/*	Q.
	submit 버튼 클릭 시,
	정보 확인 화면의 아이디와 암호를 읽어서 데이터 전송 화면의 아이디, 암호에 채우고 해당 form을 전송하시오.
	** form 태그 내의 input 태그 없는 상태로 전송하기 (id="id", it="pw" 없는 상태로 보내기) **
*/
	document.getElementById('sbtn').onclick = function(){
		var checkId = document.getElementById('pid').innerHTML;
		var checkPw = document.getElementById('ppw').innerHTML;
		
		var id_input = document.createElement('input');
		var pw_input = 	document.createElement('input');

		id_input.setAttribute('type', 'text');
		id_input.setAttribute('name', 'id');
		id_input.setAttribute('id', 'id');
		id_input.setAttribute('value', checkId);
		pw_input.setAttribute('type', 'password');
		pw_input.setAttribute('name', 'pw');
		pw_input.setAttribute('id', 'pw');
		pw_input.setAttribute('value', checkPw);
		
		document.frm.appendChild(id_input);
		document.frm.appendChild(pw_input);
	
/*		document.getElementById('id').value = checkId;
		document.getElementById('pw').value = checkPw;*/
			if(confirm('제출하시겠습니까?')){
				document.frm.submit();
			}
		};
