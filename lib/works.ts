export type WorkCategory = "duct" | "pipe" | "damper";

export type Work = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: WorkCategory;
  description: string;
};

export const workCategories: { value: WorkCategory | "all"; label: string }[] =
  [
    { value: "all", label: "すべて" },
    { value: "duct", label: "ダクト保温板金" },
    { value: "pipe", label: "配管・エルボ加工" },
    { value: "damper", label: "機器・ダンパー板金" },
  ];

export const works: Work[] = [
  {
    id: "duct-01",
    src: "/images/works/duct-01.jpg",
    alt: "工場内の大型曲線ダクトの保温板金施工",
    title: "屋内大型ダクト 曲面板金",
    category: "duct",
    description:
      "工場内の大口径ダクトに対し、ステンレス板金で曲面を美しく仕上げた施工事例です。",
  },
  {
    id: "duct-02",
    src: "/images/works/duct-02.jpg",
    alt: "プラント内で複数のダクトが交差する保温板金",
    title: "ダクト交差部 立体板金",
    category: "duct",
    description:
      "鉄骨と複数のダクトが交差する複雑な現場でも、隙間のない保温施工で熱損失を抑えます。",
  },
  {
    id: "duct-03",
    src: "/images/works/duct-03.jpg",
    alt: "工場の大型円筒ダクトの保温板金",
    title: "大型円筒ダクト 保温板金",
    category: "duct",
    description:
      "工場の主要設備となる大型ダクトを、長期にわたり保温性能を維持できる仕様で板金カバーしました。",
  },
  {
    id: "pipe-01",
    src: "/images/works/pipe-01.jpg",
    alt: "屋外の配管エルボ部の保温板金",
    title: "屋外配管 エルボ加工",
    category: "pipe",
    description:
      "屋外配管のエルボ部を、雨水浸入を防ぐ被せ方で板金加工。耐候性と美観を両立しています。",
  },
  {
    id: "pipe-02",
    src: "/images/works/pipe-02.jpg",
    alt: "プラント設備の配管保温板金エルボ部",
    title: "配管 エルボ仕上げ",
    category: "pipe",
    description:
      "高温配管のエルボ部を、扇状の細やかな板金加工で熱の漏れを最小化しました。",
  },
  {
    id: "damper-01",
    src: "/images/works/damper-01.jpg",
    alt: "ダンパー機器の板金カバー",
    title: "ダンパー 機器カバー",
    category: "damper",
    description:
      "可動部のあるダンパーに対しても、メンテナンス性を考慮した板金カバーで保温性能を確保。",
  },
  {
    id: "damper-02",
    src: "/images/works/damper-02.jpg",
    alt: "プラント設備機器の板金加工",
    title: "プラント機器 板金加工",
    category: "damper",
    description:
      "現場の機器寸法を採寸し、特殊形状のカバーをオーダーメイドで製作・施工しました。",
  },
];
