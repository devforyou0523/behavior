import "./area/area.js"
import "./commands/commands.js"
import "./gui/BGMGUI/BGMGUI.js"
import "./gui/buyAreaGUI/buyAreaGUI.js"
import "./gui/costGUI/costGUI.js"
import "./gui/guestGUI/guestGUI.js"
import "./gui/index.js"
import "./test/test.js"
import "./time/time.js"
import "./world/world.js"
import "./enchant/enchant.js"
import "./casino/casino.js"
import "./shop/shop.js"

console.warn("main.js loaded")

// 구역설정: 128줄, 시간: 30줄, 월드생성: 300줄, 상점: 60줄, 인챈트: 520줄, 
// BGM: 30줄, 구역해금: 330줄, 시세: 90줄, 나침반: 46줄, 커맨드: 105줄
// 1700줄 쓴듯

//크리스마스에 이런거 하는 내 인생 레전드...
//여러분은 행복하셨길


/*
fixNote:
-특정함수가 권한부족으로 실행되지 않는 경우, afterEvent로 실행하거나
함수로 분리한 뒤 system.run()을 통해 실행한다
*/

/*
readMe:
-설정에서 음악을 꺼야 배경음악과 겹치지 않음(gui/index.js)
-대부분의 명령어가 player1을 실행 주체로 하여 실행 되기 때문에 player1이
명령어 사용 권한을 가져야 함
-상점 Dialog 에서 권한 오류 발생함(in 24/12/21)
*/

/*
I did:
-씨앗 구매, 씨앗-뼛가루 변환 dialog 제작 (in 24/12/27)
-강화 확률, 강화 비용, 구역 비용, 아이템 시세 변경 (in 24/12/27)
-구매, 판매 아이템 삭제 및 돈 추가 (in 24/12/26)
-구매, 판매 Dialog 제작 (in 24/12/15)
-강화 단계 구분 (in 24/12/12)
-강화 타이틀 (in 24/12/11)
-배경음악 깔기 (in 24/11/30)
-scoreboard의 값을 불러와 비교하기 (in 24/11/30)
-개인 구별, 땅 해금 area.js, gui.js (in 24/11/29)
-[플레이어 개인 구별]이동 권한 설정
-'' 땅 해금
-'' 이동 구역 지정
-휴대폰 화면 만들기
-구역 재정비(오류 확인, 테두리 변경)
-방벽 제거(상단, 측면)
-건축 블록 생성
-반복 함수 구현
-상호작용, 타격시 함수 구현
-TP허브 이동 구현
*/

/*
To do:
-나침반 지급 (in 24/12/28)
-카지노 시스템 (in 24/12/27)
*/

/*
To remove:
-world.js에서 reload시 자동으로 worldStart 함수를 실행하는 부분
-world.js의 worldStart 함수에서 money scoreboard를 sidebar에 띄우는 명령어
-world.js의 worldStart 함수에서 snu0523에게 테스트용 금액 지급
*/
