const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (dot) => {

    if(dot[0] > 0 && dot[1] > 0) return 1;
    if(dot[0] < 0 && dot[1] > 0) return 2;
    if(dot[0] < 0 && dot[1] < 0) return 3;
    if(dot[0] > 0 && dot[1] < 0) return 4;

}
  

console.log(solution([2, 4]));	// 1, [x,y]


let mst = {
    // 병합 정보
    // - [타입;순번;부모순번;텍스트]
    // + 타입(0.카테고리, 1.범주, 2.구분)
    // + 순번(타입순번)
    // + 부모순번(없으면 -1)
    // + 텍스트(사용자입력값)
    ITEMGRP_DC: ['0;0;-1;카테고리1', '1;1;0;범례1', '2;2;1;구분1', '1;3;0;범례2', '2;4;3;구분2', '2;5;3;구분3'],

    // 소계 : '카테고리 순번; 소계 시작행; 소계 종료행' 값을 배열 형태로 저장
    // 0번째 카테고리의 2행-4행까지의 소계, 1번째 카테고리의 5행-7행의 소계
    SUBSUM_DC: ['0;1;2', '0;3;5'],

    // 사용하는 column
    COL: [
        'uuid', 'id', 'desc'
    ]
}

let dtl = [
    {
        tpSq: 2,
        uuid: 'SEQ0',
        id: '강아지',
        desc: '멍멍'
    },
    {
        tpSq: 2,
        uuid: 'SEQ1',
        id: '고양이',
        desc: '냐옹'
    },
    {
        tpSq: 4,
        uuid: 'SEQ2',
        id: '쥐',
        desc: '찍찍'
    },
    {
        tpSq: 5,
        uuid: 'SEQ3',
        id: '코끼리',
        desc: '뿌우'
    },
    {
        tpSq: 5,
        uuid: 'SEQ4',
        id: '사슴',
        desc: '사슴사슴'
    },
    {
        tpSq: 6,
        uuid: 'SEQ4',
        id: '뱀',
        desc: '뱀뱀'
    },
    {
        tpSq: 7,
        uuid: 'SEQ4',
        id: '고릴라',
        desc: '릴라릴라'
    }
]

