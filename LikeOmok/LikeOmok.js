let clickCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const SIZE = 19;
    const board = Array.from(Array(SIZE), () => Array(SIZE).fill(0)); // 0: 미선택, 1: 선택됨
    const boardContainer = document.getElementById('board');

    for (let row = 0; row < SIZE; row++) {
        const divone = document.createElement('div');
        boardContainer.appendChild(divone);

        for (let col = 0; col < SIZE; col++) {
            const btn = document.createElement('button');
            btn.dataset.row = row;
            btn.dataset.col = col;
            btn.innerText = ''; // 혹은 'O' 또는 좌표 등
            board[row][col] = 0;

            btn.addEventListener('click', function () 
            {
                const r = parseInt(this.dataset.row);
                const c = parseInt(this.dataset.col);
                
                if (board[r][c] !== 0) return; // 이미 눌린 경우 무시
                
                clickCount++;
                if(clickCount % 2 == 0)
                {
                    this.style.backgroundColor = "white";
                    board[r][c] = 1; // 눌림 상태 저장
                }
                else
                {
                    this.style.backgroundColor = "black";
                    board[r][c] = 2; // 눌림 상태 저장
                }
                
                // TODO: 5개 연속 체크 함수 호출
            });

            if(btn !== null)
                divone.appendChild(btn);
        }
    }

    // 단순 구현 1차용
    // const buttons = document.querySelectorAll('button');
    // //let bntindex = 1;
    // // 각 버튼에 대해 이벤트 리스너를 등록합니다.
    // buttons.forEach(button => {
    //     //button.innerText = bntindex;
    //     //bntindex++;
    //     button.dataset.clicked = 'false';
    //     button.addEventListener('click', function() {
    //         if(this.dataset.clicked == 'true')
    //             return;

    //         this.dataset.clicked = 'true';
    //         clickCount++;
    //         if(clickCount%2 == 0)
    //             button.style.backgroundColor = "white";
    //         else
    //             button.style.backgroundColor = "black";
    //     });
    // });
});