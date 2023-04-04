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
    children: {
      title: 'Liên hệ',
      data: [
        {
          title: 'Về chúng tôi',
          to: '/profile#items-home',
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
              },
              {
                title: 'Vữa',
              },
              {
                title: 'Sản phẩm chống thấm',
              },
              {
                title: 'Trám khe/Chất kết dính',
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
              },
              {
                title: 'Vữa',
              },
              {
                title: 'Sản phẩm chống thấm',
              },
              {
                title: 'Phụ gia xi măng MasterCem',
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
              },
              {
                title: 'Vữa',
              },
              {
                title: 'Sản phẩm chống thấm',
              },
              {
                title: 'Trám khe/Chất kết dính',
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
