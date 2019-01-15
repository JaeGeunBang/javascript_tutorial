
function execute(param1, param2){
    var a = 1, b = 2;
    function func() {
        return a+b;
    }
    return param1 + param2 + func() ;
}

execute(3,4)

/*
실행 컨텍스트 생성 과정

1. 활성 객체 생성 (execute())
- 해당 컨텍스트에서 실행에 필요한 여러 가지 정보를 담을 객체를 생성함.
- 객체에서 사용할 매개변수, 사용자 변수, 객체 등

2. arguments 객체 생성
- arguments 프로퍼티로 param1, param2를 참조한다.

3. 스코프 정보 생성
- 현재 컨텍스트의 유효 범위를 나타내는 스코프 정보를 생성함. 연결 리스트와 유사한 형식으로 만들어짐.
- 이 리스트를 통해 현재 컨텍스트 변수, 상위 실행 컨텍스트 변수도 접근이 가능함. [[scope]] 프로퍼티로 참조됨

4. 변수생성
5. this 바인딩
6. 코드 실행
*/