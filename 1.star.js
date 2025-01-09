// 별 찍기 문제는 숫자 N을 받으면 N번째 줄까지 별을 1개부터 N개 까지 늘려가며 출력하는 문제이다.
function star(N) {
    let stars = '';
    for (let i = 0; i < N; i++) {
        stars += '*'
        console.log(stars)
    }
}

star(5);