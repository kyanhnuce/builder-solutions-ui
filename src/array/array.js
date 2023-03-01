const MainMenuArray = [
  {
    id: 1,
    title: 'Trang chủ',
    to: '/',
  },
  {
    id: 2,
    title: 'Liên hệ',
    to: '/profile',
  },
  {
    id: 3,
    title: 'Sản phẩm',
    to: '/item',
  },
  {
    id: 4,
    title: 'Các dự án',
    to: '/projects',
  },
];

const MainMenuArrayMoblie = [
  {
    id: 1,
    title: 'Trang chủ',
    to: '/',
  },
  {
    id: 2,
    title: 'Liên hệ',
    to: '/profile',
    children: {
      title: 'Liên hệ',
      data: [
        {
          title: 'Về chúng tôi',
          to: '/about-us',
        },
        {
          title: 'Đối tác',
          to: '/partner',
        },
        {
          title: 'Tuyển dụng',
          to: '/job-opportunities',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Sản phẩm',
    to: '/item',
    children: {
      title: 'Sản phẩm/Giải pháp',
      data: [
        {
          title: 'Sản phẩm hãng Sika',
          children: {
            title: 'Sika Solutions',
            data: [
              {
                title: 'Phụ gia bê tông',
                to: '/',
              },
              {
                title: 'Vữa',
                to: '/',
              },
              {
                title: 'Sản phẩm chống thấm',
                to: '/',
              },
              {
                title: 'Trám khe/Chất kết dính',
                to: '/',
              },
            ],
          },
        },
        {
          title: 'Sản phẩm hãng MBS',
          children: {
            title: 'BASF SOLUTIONS',
            data: [
              {
                title: 'Phụ gia bê tông',
                to: '/',
              },
              {
                title: 'Vữa',
                to: '/',
              },
              {
                title: 'Sản phẩm chống thấm',
                to: '/',
              },
              {
                title: 'Trám khe/Chất kết dính',
                to: '/',
              },
            ],
          },
        },
        {
          title: 'Sản phẩm hãng MC-Bifi',
          children: {
            title: 'MC-BIFI SOLUTIONS',
            data: [
              {
                title: 'Phụ gia bê tông',
                to: '/',
              },
              {
                title: 'Vữa',
                to: '/',
              },
              {
                title: 'Sản phẩm chống thấm',
                to: '/',
              },
              {
                title: 'Trám khe/Chất kết dính',
                to: '/',
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Các dự án',
    to: '/projects',
    children: {
      title: 'Các dự án',
      data: [
        {
          title: 'Trong nước',
          to: '/local-propects',
        },
        {
          title: 'Quốc tế',
          to: '/international-projects',
        },
        {
          title: 'Khác',
          to: '/other-projects',
        },
      ],
    },
  },
];

export { MainMenuArray, MainMenuArrayMoblie };
