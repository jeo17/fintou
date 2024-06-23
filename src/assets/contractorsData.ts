interface Contractors {
  title: string;
  availability: boolean;
  imgPath: string;
  popularity: number[];
}

export const contractors: Contractors[] = [
  {
    title: "شركة أحمد للمقاولة",
    availability: true,
    imgPath: "/contractors/Contractors1.jpg",
    popularity: [21, 5],
  },
  {
    title: "شركة وليد لاصلاح الكهرباء",
    availability: false,
    imgPath: "/contractors/Contractors2.jfif",
    popularity: [1, 0],
  },
  {
    title: "شركة محمد لترميم المنازل",
    availability: true,
    imgPath: "/contractors/Contractors3.jpg",
    popularity: [10, 1],
  },
  {
    title: "شركة توفيق للدهان",
    availability: true,
    imgPath: "/contractors/Contractors4.jpg",
    popularity: [0, 0],
  },
  {
    title: "شركة أسامة لصيانة الأنابيب",
    availability: false,
    imgPath: "/contractors/Contractors5.jpg",
    popularity: [50, 3],
  },
  {
    title: "شركة أمين لخدمة الغاز",
    availability: false,
    imgPath: "/contractors/Contractors6.jpg",
    popularity: [24, 0],
  },
];
