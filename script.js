// 학생 리스트 (학번: 이름)
const studentList = {
    '2301': '구준서',
    '2302': '김수현',
    '2303': '김태훈',
    '2304': '박준우',
    '2305': '윤태우',
    '2306': '이도윤',
    '2307': '전호준',
    '2308': '정우진',
    '2309': '정하준',
    '2310': '차재영',
    '2311': '최의성',
    '2312': '허진호',
    '2313': '황재용',
    '2314': '강은성',
    '2315': '김나원',
    '2316': '김서현',
    '2317': '김아름',
    '2318': '김주영',
    '2319': '김하은',
    '2320': '노하련',
    '2321': '서윤하',
    '2322': '손은혜',
    '2323': '오지은',
    '2324': '윤다원',
    '2325': '이은솔',
    '2326': '이지아',
    '2327': '임은진',
    '2328': '장아경',
    '2329': '정강희',
    // 여기에 더 많은 학생들을 추가할 수 있습니다.
};

// 모든 문제 데이터
const questions = [
    {
        id: 1,
        question: "🍒목재의 구조 중에서 (가), (나)에 해당하는 것은? (198쪽)",
        options: [
            "(가) 변재 (나) 심재",
            "(가) 나이테 (나) 심재", 
            "(가) 변재 (나) 나이테",
            "(가) 심재 (나) 변재",
            "(가) 심재 (나) 나이테"
        ],
        correct: 3,
        points: 3
    },
    {
        id: 2,
        question: "목재의 구조 중에서 (가)에 해당하는 것은? (198쪽)",
        options: [
            "변재",
            "춘재",
            "추재", 
            "나이테",
            "심재"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 3,
        question: "목재의 특성에 대한 설명이 잘못된 것은? (198쪽)",
        options: [
            "나이테를 이용하여 아름다운 무늬의 제품을 만들수 있다.",
            "다른 재료에 비해 가볍고 단단하다.",
            "불에 타기 쉽고, 수분에 약해 변형이 일어나기 쉽다.",
            "가공이 쉬워 인류가 가장 오랫동안 사용해 온 재료이다.",
            "열과 전기를 전달하는 능력이 뛰어나다"
        ],
        correct: 4,
        points: 1
    },
    {
        id: 4,
        question: "🍒 다음 인터뷰에 나타난 재료로 가장 적절한 것은? (198쪽)",
        options: [
            "금속",
            "유리",
            "목재",
            "고무",
            "플라스틱"
        ],
        correct: 2,
        points: 1
    },
    {
        id: 5,
        question: "🍒 목재 가공재 중 다음에 해당하는 것은? (199쪽)",
        options: [
            "집성재(集成材)",
            "합판(合板)",
            "원목",
            "중밀도섬유판(MDF)",
            "파티클보드(particle board)"
        ],
        correct: 0,
        points: 3
    },
    {
        id: 6,
        question: "🍒 목재 가공재 중 다음에 해당하는 것은? (199쪽)",
        options: [
            "합판(合板)",
            "파티클보드(particle board)",
            "원목",
            "중밀도섬유판(MDF)",
            "집성재(集成材)"
        ],
        correct: 0,
        points: 3
    },
    {
        id: 7,
        question: "목재 가공재 중 다음에 해당하는 것은? (199쪽)",
        options: [
            "집성재(集成材)",
            "합판(合板)",
            "중밀도섬유판(MDF)",
            "파티클보드(particle board)",
            "원목"
        ],
        correct: 2,
        points: 3
    },
    {
        id: 8,
        question: "🍒 목재 가공재 중 다음에 해당하는 것은? (199쪽)",
        options: [
            "원목",
            "파티클보드(particle board)",
            "합판(合板)",
            "중밀도섬유판(MDF)",
            "집성재(集成材)"
        ],
        correct: 1,
        points: 3
    },
    {
        id: 9,
        question: "🍒 철금속 중 (가), (나)에 해당하는 것은? (200쪽)",
        options: [
            "(가) 주철 (나) 순철",
            "(가) 탄소강 (나) 순철",
            "(가) 순철 (나) 탄소강",
            "(가) 순철 (나) 주철",
            "(가) 주철 (나) 탄소강"
        ],
        correct: 2,
        points: 3
    },
    {
        id: 10,
        question: "🍒 철금속 중 다음에 해당하는 것은? (200쪽)",
        options: [
            "탄소강",
            "주철",
            "고속도강",
            "순철",
            "스테인리스강"
        ],
        correct: 1,
        points: 3
    },
    {
        id: 11,
        question: "🍒 비철금속 중 (가), (나)에 해당하는 것은? (200쪽)",
        options: [
            "(가) 구리 (나) 은",
            "(가) 구리 (나) 알루미늄",
            "(가) 알루미늄 (나) 구리",
            "(가) 구리 (나) 금",
            "(가) 구리 (나) 텅스텐"
        ],
        correct: 1,
        points: 3
    },
    {
        id: 12,
        question: "🍒 다음 철합금(탄소강+크롬)에 해당하는 것은? (200쪽)",
        options: [
            "스테인리스강",
            "중탄소강",
            "고속도강",
            "고탄소강",
            "저탄소강"
        ],
        correct: 0,
        points: 3
    },
    {
        id: 13,
        question: "🍒 다음 철합금(탄소강+크롬+텅스텐)에 해당하는 것은? (200쪽)",
        options: [
            "중탄소강",
            "고탄소강", 
            "저탄소강",
            "스테인리스강",
            "고속도강"
        ],
        correct: 4,
        points: 3
    },
    {
        id: 14,
        question: "🍒 다음 구리합금(구리+아연)에 해당하는 것은? (200쪽)",
        options: [
            "청동",
            "황동",
            "백동",
            "오동",
            "단동"
        ],
        correct: 1,
        points: 3
    },
    {
        id: 15,
        question: "🍒 다음 알루미늄합금(알루미늄+구리+마그네슘)에 해당하는 것은? (200쪽)",
        options: [
            "황동",
            "청동",
            "두랄루민",
            "초초두랄루민",
            "초두랄루민"
        ],
        correct: 2,
        points: 3
    },
    {
        id: 16,
        question: "🍒 플라스틱에 대한 설명으로 잘못된 것은? (201쪽)",
        options: [
            "습도에 따라 열가소성 플라스틱과 열경화성 플라스틱으로 분류한다.",
            "충격을 잘 흡수하기도 한다.",
            "종류에 따라 빛을 통과시키거나 금속만큼 단단한 특성이 있다.",
            "일반적으로 가볍고 강하며, 전기를 잘 전달하지 못한다.",
            "다양한 모양으로 만들거나 여러 색을 입힐 수 있다."
        ],
        correct: 0,
        points: 3
    },
    {
        id: 17,
        question: "🍒🍒 다음 (가), (나) 신소재로 알맞은 것은? (202쪽)",
        options: [
            "(가) 바이오센서 (나) 파인세라믹스",
            "(가) 바이오센서 (나) 광섬유",
            "(가) 형상기억합금 (나) 섬유강화금속",
            "(가) 형상기억합금 (나) 바이오센서",
            "(가) 파인 세라믹스 (나) 초전도체"
        ],
        correct: 2,
        points: 3
    },
    {
        id: 18,
        question: "다음 (가), (나) 신소재로 알맞은 것은? (202쪽)",
        options: [
            "(가) 형상기억합금 (나) 섬유강화금속",
            "(가) 형상기억합금 (나) 바이오센서",
            "(가) 바이오센서 (나) 광섬유",
            "(가) 바이오센서 (나) 파인세라믹스",
            "(가) 파인 세라믹스 (나) 초전도체"
        ],
        correct: 2,
        points: 3
    },
    {
        id: 19,
        question: "다음 (가), (나) 신소재로 알맞은 것은? (202쪽)",
        options: [
            "(가) 형상기억합금 (나) 섬유강화금속",
            "(가) 형상기억합금 (나) 바이오센서",
            "(가) 바이오센서 (나) 광섬유",
            "(가) 바이오센서 (나) 파인세라믹스",
            "(가) 파인 세라믹스 (나) 초전도체"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 20,
        question: "🍒 교사의 질문에 잘못 대답한 학생은? (202쪽)",
        options: [
            "정",
            "갑",
            "병",
            "갑,을",
            "을"
        ],
        correct: 2,
        points: 1
    },
    {
        id: 21,
        question: "🍒 다음 리포터가 소개하고 있는 신소재는? (203쪽)",
        options: [
            "그래핀",
            "파인세라믹스",
            "탄소나노튜브",
            "형상기억합금",
            "광섬유"
        ],
        correct: 0,
        points: 1
    },
    {
        id: 22,
        question: "다음 소개하고 있는 신소재는? (203쪽)",
        options: [
            "그래핀",
            "탄소나노튜브",
            "형상기억합금",
            "광섬유",
            "파인세라믹스"
        ],
        correct: 1,
        points: 1
    },
    {
        id: 23,
        question: "🍒 다음 글을 통해 알 수 있는 첨단 기술은? (203쪽)",
        options: [
            "ㄱ,ㄴ",
            "ㄷ,ㄹ",
            "ㄱ,ㄹ",
            "ㄴ,ㄹ",
            "ㄱ,ㄷ"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 24,
        question: "다음 사례에서 A씨가 이용한 기술에 대한 설명으로 가장 적절한 것? (203쪽)",
        options: [
            "바이오기술이 활용되고 있다.",
            "리사이클링 기술이 활용되고 있다.",
            "사물인터넷 기술(IoT)이 활용되고 있다.",
            "신재생에너지 기술이 활용되고 있다.",
            "열처리 기술이 활용되고 있다."
        ],
        correct: 2,
        points: 1
    },
    {
        id: 25,
        question: "목재의 중밀도섬유판(MDF)에 대한 설명으로 옳은 것은? (216쪽)",
        options: [
            "재질이 고르다.",
            "수분에 강하다.",
            "원목을 얇은 판으로 만들어 겹쳐서 만든다.",
            "나뭇결이 평행하도록 나란하게 붙여 만든다.",
            "원목을 작은 조각으로 부수어 접착하여 만든다."
        ],
        correct: 0,
        points: 1
    },
    {
        id: 26,
        question: "철금속 중 탄소의 함유량이 가장 많은 것은? (216쪽)",
        options: [
            "구리",
            "순철",
            "주철",
            "탄소강",
            "알루미늄"
        ],
        correct: 2,
        points: 1
    },
    {
        id: 27,
        question: "건설기술의 특징이 올바로 연결된 것은? (221쪽)",
        options: [
            "장기성-건설기술은 다양한 분야의 학문과 기술 및 예술이 종합적으로 활용된다.",
            "종합성-건설구조물은 많은 노동력과 자본이 투입되므로 용도, 규모, 형태 등이 건설 목적에 맞는지 충분히 고려해야 한다.",
            "지역성-건설구조물은 완성하는데 많은 시간이 걸리고, 완성된 건설 구조물은 오랫동안 이용된다.",
            "일회성-건설구조물은 한번 완성되면 다시 고치거나 재시공이 어렵다.",
            "경제성-건설 구조물은 많은 사람들이 함께 이용하므로 공공성을 지닌다."
        ],
        correct: 3,
        points: 1
    },
    {
        id: 28,
        question: "다음 (가), (나)의 토목구조물은? (222쪽)",
        options: [
            "(가) 터널 (나) 도로",
            "(가) 터널 (나) 철도",
            "(가) 터널 (나) 교량",
            "(가) 도로 (나) 철도",
            "(가) 도로 (나) 교량"
        ],
        correct: 0,
        points: 2
    },
    {
        id: 29,
        question: "🍒 다음 (가), (나), (다)의 철도관련 명칭은? (222쪽)",
        options: [
            "(가) 도상 (나) 침목 (다) 레일",
            "(가) 침목 (나)도상 (다) 레일",
            "(가) 레일 (나) 도상 (다) 침목",
            "(가) 레일, (나) 침목 (다) 도상",
            "(가) 침목 (나) 레일 (다) 도상"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 30,
        question: "🍒 다음 (가), (나)의 교량 종류? (223쪽)",
        options: [
            "(가) 사장교 (나) 아치교",
            "(가) 아치교 (나) 현수교",
            "(가) 사장교 (나) 현수교",
            "(가) 거더교 (나) 라멘교",
            "(가) 라멘교 (나) 트러스교"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 31,
        question: "🍒 연속된 삼각형 형태로 하중을 지지하는 교량? (223쪽)",
        options: [
            "아치교",
            "거더교",
            "라멘교",
            "트러스교",
            "사장교"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 32,
        question: "🍒 아래 그림은 광양시가 이순신대교 형상을 이용한 디자인을 개발하여 특허청에 상표 등록한 것(2014.5.9)이다. 이순신대교의 교량 형태는? (223쪽)",
        options: [
            "아치교",
            "사장교",
            "거더교",
            "현수교",
            "라멘교"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 33,
        question: "🍒 이순신대교에 대한 설명으로 잘못된 것은? (223쪽)",
        options: [
            "주탑과 주탑 사이의 길이는 1545m로 임진왜란이 일어난 해를 의미한다.",
            "여수시 묘도동과 광양시 금호동을 연결하는 다리이다.",
            "길이 2.26km의 현수교이다.",
            "해수면에서 상판까지의 높이가 80m로 우리나라에서 제일 높다.",
            "2013년 2월 8일 정식 개통하였다."
        ],
        correct: 0,
        points: 1
    },
    {
        id: 34,
        question: "🍒 다음 전문가가 언급한 교통 관련 구조물은? (223쪽)",
        options: [
            "댐",
            "교량",
            "철도",
            "터널",
            "도로"
        ],
        correct: 1,
        points: 1
    },
    {
        id: 35,
        question: "다음 (가), (나)의 교량 종류? (223쪽)",
        options: [
            "(가) 거더교 (나) 라멘교",
            "(가) 라멘교 (나) 트러스교",
            "(가) 사장교 (나) 아치교",
            "(가) 아치교 (나) 현수교",
            "(가) 사장교 (나) 현수교"
        ],
        correct: 2,
        points: 1
    },
    {
        id: 36,
        question: "🍒 다음에 언급하는 수자원 관련 구조물은? (224쪽)",
        options: [
            "하천",
            "하수도",
            "중수도",
            "댐",
            "상수도"
        ],
        correct: 4,
        points: 2
    },
    {
        id: 37,
        question: "🍒 다음 학생들이 말하는 건축 구조물은? (225쪽)",
        options: [
            "상업용",
            "우주용",
            "공공용",
            "좋아용",
            "주거용"
        ],
        correct: 4,
        points: 2
    },
    {
        id: 38,
        question: "다음 (가), (나)에 해당하는 건설구조물 생산에 필요한 사람? (228쪽)",
        options: [
            "(가) 공사 주체 (나) 설계자",
            "(가) 설계자 (나) 시공자",
            "(가) 설계자 (나) 감리자",
            "(가) 시공자 (나) 감리자",
            "(가) 시공자 (나) 설계자"
        ],
        correct: 1,
        points: 3
    },
    {
        id: 39,
        question: "다음 (가), (나)에 해당하는 건설 계획 종류? (230쪽)",
        options: [
            "(가) 환경계획 (나) 교통계획",
            "(가) 환경계획 (나) 배치계획",
            "(가) 환경계획 (나) 평면계획",
            "(가) 교통계획 (나) 환경계획",
            "(가) 교통계획 (나) 구조계획"
        ],
        correct: 0,
        points: 2
    },
    {
        id: 40,
        question: "🍒 다음에 해당하는 건설 계획 종류? (230쪽)",
        options: [
            "평면",
            "배치",
            "교통",
            "환경",
            "조형"
        ],
        correct: 1,
        points: 2
    },
    {
        id: 41,
        question: "다음 (가), (나)에 해당하는 도면 종류? (231쪽)",
        options: [
            "(가) 평면도 (나) 단면도",
            "(가) 평면도 (나) 배치도",
            "(가) 평면도 (나) 입면도",
            "(가) 배치도 (나) 평면도",
            "(가) 배치도 (나) 입면도"
        ],
        correct: 0,
        points: 1
    },
    {
        id: 42,
        question: "🍒 입면도를 통해 알 수 있는 것? (231쪽)",
        options: [
            "건물의 높이, 창문의 모양, 마감 재료 등을 알 수 있다.",
            "공간, 면적, 출입구, 창 등의 위치를 알 수 있다.",
            "건물의 면적, 층의 높이, 창호의 높이 등을 알 수 있다.",
            "건물의 위치, 방위, 모양, 통로, 입구 등의 위치를 알 수 있다.",
            "각 공간의 높이, 층의 높이, 창호의 높이를 알 수 있다."
        ],
        correct: 0,
        points: 2
    },
    {
        id: 43,
        question: "다음 (가), (나)에 해당하는 건설 시공 과정? (232쪽)",
        options: [
            "(가) 착공준비 (나) 토공사",
            "(가) 가설공사 (나) 기초공사",
            "(가) 골조공사 (나) 마감공사",
            "(가) 설비공사 (나) 완공",
            "(가) 설비공사 (나) 마감공사"
        ],
        correct: 0,
        points: 3
    },
    {
        id: 44,
        question: "🍒 건설 시공 과정은 모두 8단계로 나눌 수 있다. 2번째 과정? (232쪽)",
        options: [
            "가설공사",
            "토공사",
            "착공준비",
            "골조공사",
            "기초공사"
        ],
        correct: 1,
        points: 2
    },
    {
        id: 45,
        question: "🍒 다음 (가), (나), (다)에 해당하는 수원화성 건설 장비? (234쪽)",
        options: [
            "(가) 거중기 (나) 유형거 (다) 녹로",
            "(가) 거중기 (나) 녹로 (다) 유형거",
            "(가) 유형거 (나) 녹로 (다) 거중기",
            "(가) 녹로 (나) 거중기 (다) 유형거",
            "(가) 녹로 (나) 유형거 (다) 거중기"
        ],
        correct: 1,
        points: 2
    },
    {
        id: 46,
        question: "🍒 불국사에 사용된 지진 방지 대책은? (226쪽)",
        options: [
            "A씨:주춧돌 B씨: 그랭이공법",
            "A씨:동틀돌 B씨: 그랭이공법",
            "A씨:그랭이공법 B씨: 동틀돌",
            "A씨:동틀돌 B씨: 주춧",
            "A씨:그랭이공법 B씨: 주춧돌"
        ],
        correct: 2,
        points: 2
    },
    {
        id: 47,
        question: "🍒 고대에 지어진 구조물? (226쪽)",
        options: [
            "고딕양식을 적용한 퀼른대성당",
            "조선시대 유교의 영향을 받은 종묘",
            "신라시대 석조 건축물인 첨성대",
            "입체 트러스와 돔 구조를 적용한 고척 스카이돔 야구장",
            "로마네스크양식을 적용한 피사대성당"
        ],
        correct: 2,
        points: 2
    },
    {
        id: 48,
        question: "다음 내용은 건설 기술 역사 중 어디에 해당하는가? (236쪽)",
        options: [
            "고대",
            "중세",
            "근대",
            "현대",
            "미래"
        ],
        correct: 1,
        points: 1
    },
    {
        id: 49,
        question: "다음 홍보물에 나타난 첨단기술로 가장 적절한 것?",
        options: [
            "나노기술",
            "핀테크기술",
            "증강현실기술",
            "사물인터넷기술",
            "웨어러블 로봇 기술"
        ],
        correct: 3,
        points: 1
    },
    {
        id: 50,
        question: "🍒 교량에 작용하는 힘 중 다음 설명하는 것?(243쪽)",
        options: [
            "중력",
            "휨모멘트",
            "인장력",
            "압축력",
            "전단력"
        ],
        correct: 4,
        points: 1
    },
    {
        id: 51,
        question: "🍒 교량에 작용하는 힘 중 다음 설명하는 것?(243쪽)",
        options: [
            "인장력",
            "전단력",
            "휨모멘트",
            "중력",
            "압축력"
        ],
        correct: 0,
        points: 2
    },
    {
        id: 52,
        question: "다음 (가), (나)의 교량 종류? (253쪽)",
        options: [
            "(가) 사장교 (나) 현수교",
            "(가) 사장교 (나) 아치교",
            "(가) 사장교 (나) 거더교",
            "(가) 사장교 (나) 라멘교",
            "(가) 사장교 (나) 사원교"
        ],
        correct: 0,
        points: 1
    },
    {
        id: 53,
        question: "토목 구조물에 해당하는 것만 묶인 것은? (252쪽)",
        options: [
            "주택, 도로",
            "교량, 철도",
            "댐, 아파트",
            "학교, 항만",
            "도서관, 백화점"
        ],
        correct: 1,
        points: 1
    },
    {
        id: 54,
        question: "연속된 삼각형 형태로 하중을 지지하는 교량은? (252쪽)",
        options: [
            "거더교",
            "사장교",
            "아치교",
            "현수교",
            "트러스교"
        ],
        correct: 4,
        points: 1
    },
    {
        id: 55,
        question: "한번 사용한 비교적 깨끗한 오수나 빗물을 정화한 뒤 재활용하는 시설은? (252쪽)",
        options: [
            "중수도",
            "하수도",
            "하수 처리장",
            "지하 댐",
            "상수도"
        ],
        correct: 0,
        points: 1
    },
    {
        id: 56,
        question: "🍒 서술형) (가) 밑줄 친 부분은 생산 기술의 하위요소 중 어디에 속하는가? (나) 철수와 친구들이 벤치를 만든 활동이 다른 친구들에게 어떤 영향을 줄 수 있을지 서술하시오. (217쪽)",
        correctAnswer: "(가) 공정 (나) 친구와 이야기할 수 있는 장소가 생겨 교우관계가 더욱 좋아졌다. 학습 환경이 개선되고, 학교생활에 필요한 제품을 직접 만들어 사용하여 애교심이 더욱 생겼다.",
        points: 2
    },
    {
        id: 57,
        question: "🍒 서술형) (가), (나)에 해당하는 건설기술을 쓰고, 그 예를 3가지 이상 서술하시오. (220쪽)",
        correctAnswer: "(가) 토목기술 - 도로, 철도, 교량, 터널, 댐, 하천, 상하수도 등이 있다. (나) 건축기술 - 주택, 아파트, 학교, 병원, 도서관, 박물관, 백화점 등이 있다.",
        points: 3
    },
    {
        id: 58,
        question: "🍒 서술형) 목재가공재 중 파티클보드를 만드는 방법을 서술하시오. (199쪽)",
        correctAnswer: "원목을 작은 조각으로 부수어 접착제와 함께 높은 온도와 압력을 가하여 만든다.",
        points: 2
    },
    {
        id: 59,
        question: "🍒 서술형) 플라스틱을 열가소성플라스틱과 열경화성플라스틱으로 분류하는 기준을 서술하시오. (201쪽)",
        correctAnswer: "열에 대한 성질에 따라 열가소성 플라스틱과 열경화성 플라스틱으로 분류한다.",
        points: 2
    },
    {
        id: 60,
        question: "🍒 서술형) 1200년 동안 크고 작은 지진에 견디어 온 불국사의 건축 비밀 2가지를 서술하시오. (226쪽)",
        correctAnswer: "동틀돌과 그랭이 공법에 있다.",
        points: 2
    },
    {
        id: 61,
        question: "🍒 서술형) 건설구조물 생산에 필요한 사람들 중 감리자에 대해 서술하시오. (228쪽)",
        correctAnswer: "공사 규정에 맞게 진행되는지 확인하고 지도, 감독하는 사람이다.",
        points: 2
    }
];

// 현재 로그인한 학생 정보
let currentStudent = {
    id: '',
    name: ''
};

// 사용자 답안
let userAnswers = {};

// 통계 데이터
let statistics = JSON.parse(localStorage.getItem('examStatistics')) || {};

// 로그인 함수
function login() {
    const studentId = document.getElementById('studentId').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    const errorDiv = document.getElementById('loginError');

    if (!studentId || !studentName) {
        errorDiv.textContent = '학번과 이름을 모두 입력해주세요.';
        return;
    }

    if (!studentList[studentId]) {
        errorDiv.textContent = '등록되지 않은 학번입니다.';
        return;
    }

    if (studentList[studentId] !== studentName) {
        errorDiv.textContent = '학번과 이름이 일치하지 않습니다.';
        return;
    }

    currentStudent.id = studentId;
    currentStudent.name = studentName;

    // 통계 데이터 초기화
    if (!statistics[studentId]) {
        statistics[studentId] = {
            name: studentName,
            attempts: 0
        };
    }

    showScreen('examScreen');
    generateExam();
}

// 화면 전환 함수
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

// 시험 문제 생성
function generateExam() {
    document.getElementById('studentInfo').innerHTML = 
        `<strong>학번:</strong> ${currentStudent.id} | <strong>이름:</strong> ${currentStudent.name}`;
    
    const form = document.getElementById('examForm');
    form.innerHTML = '';

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        let questionHTML = `
            <h3><span class="cherry">${q.question.includes('🍒') ? '🍒' : ''}</span> 
            ${index + 1}. ${q.question.replace(/🍒/g, '')} (${q.points}점)</h3>
            <div class="options">
        `;

        q.options.forEach((option, optIndex) => {
            questionHTML += `
                <label class="option">
                    <input type="radio" name="q${q.id}" value="${optIndex}">
                    ${option}
                </label>
            `;
        });

        questionHTML += '</div>';
        questionDiv.innerHTML = questionHTML;
        form.appendChild(questionDiv);
    });
}

// 시험 제출
function submitExam() {
    userAnswers = {};
    
    questions.forEach(q => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
        userAnswers[q.id] = selected ? parseInt(selected.value) : -1;
    });

    // 통계 업데이트
    statistics[currentStudent.id].attempts++;
    localStorage.setItem('examStatistics', JSON.stringify(statistics));

    showScreen('resultScreen');
    calculateScore();
}

// 점수 계산
function calculateScore() {
    let totalScore = 0;
    let maxScore = 0;
    let correctCount = 0;

    questions.forEach(q => {
        maxScore += q.points;
        if (userAnswers[q.id] === q.correct) {
            totalScore += q.points;
            correctCount++; 
        }
    });

    document.getElementById('scoreInfo').innerHTML = `
        <h2>총점: ${totalScore}/${maxScore}</h2>
        <p>정답률: ${correctCount}/${questions.length} (${Math.round(correctCount/questions.length*100)}%)</p>
        <p><strong>학번:</strong> ${currentStudent.id} | <strong>이름:</strong> ${currentStudent.name}</p>
    `;
}

// 상세 결과 보기
function showResults() {
     calculateScore();
    showScreen('scoreScreen');
    
    const resultsDiv = document.getElementById('detailedResults');
    let resultsHTML = '';

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.correct;
        
        resultsHTML += `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>${index + 1}. ${q.question.replace(/🍒/g, '')} (${q.points}점)</h4>
                <div class="user-answer">
                    <strong>내 답:</strong> ${userAnswer >= 0 ? q.options[userAnswer] : '답안 없음'}
                    ${isCorrect ? '✅' : '❌'}
                </div>
                <div class="correct-answer">
                    <strong>정답:</strong> ${q.options[q.correct]}
                </div>
            </div>
        `;
    });

    resultsDiv.innerHTML = resultsHTML;
}

// 통계 보기
function showStatistics() {
    showScreen('statisticsScreen');
    
    const statsDiv = document.getElementById('statisticsData');
    let statsHTML = `
        <table class="statistics-table">
            <thead>
                <tr>
                    <th>학번</th>
                    <th>이름</th>
                    <th>시험 횟수</th>
                </tr>
            </thead>
            <tbody>
    `;

    Object.keys(statistics).forEach(studentId => {
        const student = statistics[studentId];
        statsHTML += `
            <tr>
                <td>${studentId}</td>
                <td>${student.name}</td>
                <td>${student.attempts}회</td>
            </tr>
        `;
    });

    statsHTML += `
            </tbody>
        </table>
    `;

    statsDiv.innerHTML = statsHTML;
}

// 다시 풀기
function restartExam() {
    userAnswers = {};
    showScreen('examScreen');
    generateExam();
}

// 돌아가기
function goBack() {
    showScreen('resultScreen');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    showScreen('loginScreen');
});