// 초기 박테리아 세포 개수가 N일 때 해마다 세포 개수가 이전 세포 개수의 반으로 줄어든다면 언제 모든 박테리아가 죽을지 계산해야한다.(세포의 갯수는 소수점일 수 없다.)
function cells(N) {
    let answer = N;
    let cnt = 0;
    while (answer) {
        cnt++;
        answer = parseInt(answer / 2);
    }
    console.log('소멸하는 시기 => ', cnt, '년뒤')
}

cells(16);