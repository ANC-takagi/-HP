export const company = {
  name: "株式会社菊地工業",
  nameEn: "Kikuchi Kogyo Co., Ltd.",
  representative: "菊地 航平",
  address: {
    full: "千葉県市原市五井5714-10",
    prefecture: "千葉県",
    city: "市原市",
    rest: "五井5714-10",
  },
  founded: "令和元年9月17日",
  foundedNote: "創業8期目",
  business: "熱絶縁工事(保温板金)",
  catchphrase: "みんなのライフラインを支える。",
  contact: {
    tel: "080-6849-5431",
    telDigits: "08068495431",
    email: "kikuchikogyo37@gmail.com",
  },
  serviceAreas: [
    "千葉県市原市",
    "神奈川県川崎市",
    "茨城県鹿嶋市",
    "(地方出張あり)",
  ],
  facilities: [
    "工場・プラント",
    "空調ダクト",
    "配管(スチーム・冷温水・ガスなど)",
    "ボイラー",
    "タンク・各種機器",
  ],
  strengths: [
    {
      title: "若さと勢い",
      description:
        "若手中心の活気あるチームで、現場のスピード感と柔軟な対応力に自信があります。",
    },
    {
      title: "確かな技術が身につく現場",
      description:
        "プラント・工場・空調・配管と幅広い設備に対応しているため、一通りの板金技術を着実に習得できます。",
    },
    {
      title: "安心の元請対応・施工品質",
      description:
        "仕上がりの美しさと安全管理を両立し、保温・断熱の本質的な性能を確実に確保します。",
    },
  ],
  recruit: {
    job: "保温板金",
    employmentTypes: ["正社員", "下請け業者様", "個人事業主"],
    salary: "13,000円〜",
    salaryNote: "雇用形態・経験年数・年齢により異なります",
    workLocation: "主に千葉県市原市",
    workHours: "8:00〜17:00 (通勤時間別)",
    holidays: "日曜休み",
    benefits: [
      "社会保険・厚生年金・雇用保険完備",
      "家族手当",
      "交通費支給",
    ],
    requirements: [
      "未経験者歓迎",
      "18歳以上",
      "免許不要(あれば尚可)",
    ],
  },
  social: {
    githubRepo: "https://github.com/ANC-takagi/-HP",
  },
} as const;

export type Company = typeof company;
