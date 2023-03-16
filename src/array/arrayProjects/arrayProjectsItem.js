import images from '~/assets/images';

const projectsItem = [
  {
    id: 1,
    images: images.local,
    alt: 'Trong nước',
    title: 'Trong Nước',
    description:
      'Những công trình được sử dụng sản phẩm bởi các hãng do Builder-Solutions cung cấp vận hành trong nước',
  },
  {
    id: 2,
    images: images.international,
    alt: 'Quốc tế',
    title: 'Quốc Tế',
    description:
      'Những công trình được sử dụng sản phẩm bởi các hãng do Builder-Solutions cung cấp vận hành tại thị trường quốc tế',
  },
  {
    id: 3,
    images: images.other,
    alt: 'Khác',
    title: 'Dự Án Đặc Biệt',
    description:
      'Ngoài ra, có những dự án đặc biệt sử dụng các sản phẩm chuyên dụng như trụ điện gió, sân bay, công nghệ điện tử,...',
  },
  {
    id: 4,
    images: images.other,
    alt: 'Contact',
    title: 'Kênh phân phối',
    description:
      'Hệ thống cửa hàng trong nước và quốc tế cùng với thông tin nhà máy của các hãng đối tác được sản xuất trong nước.',
  },
];

export { projectsItem };
