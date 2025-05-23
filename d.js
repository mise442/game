// 필요한 HTML 요소들을 가져옵니다.
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const message = document.getElementById('message'); // 결과 메시지 표시할 곳
const choicesDisplay = document.getElementById('choices'); // 사용자와 컴퓨터 선택 표시할 곳

// 가위, 바위, 보를 숫자로 표현합니다. (0: 바위, 1: 가위, 2: 보)
const choices = ['바위', '가위', '보'];

// 게임 결과 판정 함수
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return '비겼습니다!'; // 비겼을 때 메시지
    } else if (
        (userChoice === 0 && computerChoice === 1) || // 바위(0) vs 가위(1) -> 사용자 승
        (userChoice === 1 && computerChoice === 2) || // 가위(1) vs 보(2) -> 사용자 승
        (userChoice === 2 && computerChoice === 0)    // 보(2) vs 바위(0) -> 사용자 승
    ) {
        return '축하합니다! 당신이 이겼습니다!'; // 사용자가 이겼을 때 메시지
    } else {
        return '아쉽네요. 컴퓨터가 이겼습니다. 당신이 졌습니다.'; // 사용자가 졌을 때 메시지
    }
}

// 게임을 플레이하는 함수 (사용자의 선택에 따라 호출됩니다)
function playGame(userChoice) {
    // 컴퓨터의 선택 (0, 1, 2 중 무작위 선택)
    const computerChoice = Math.floor(Math.random() * 3);

    // 사용자와 컴퓨터의 선택을 화면에 표시합니다.
    choicesDisplay.textContent = `당신: ${choices[userChoice]}, 컴퓨터: ${choices[computerChoice]}`;

    // 결과 판정 및 화면에 표시합니다.
    const result = determineWinner(userChoice, computerChoice);
    message.textContent = result; // 결과 메시지 업데이트
}

// 각 버튼에 클릭 이벤트를 연결합니다.
// 버튼이 클릭되면 playGame 함수가 호출되면서 해당 패의 숫자를 전달합니다.
rockBtn.addEventListener('click', () => playGame(0)); // '바위' 버튼 클릭 시 0 전달
scissorsBtn.addEventListener('click', () => playGame(1)); // '가위' 버튼 클릭 시 1 전달
paperBtn.addEventListener('click', () => playGame(2)); // '보' 버튼 클릭 시 2 전달
