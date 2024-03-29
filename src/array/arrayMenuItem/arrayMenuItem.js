const profileMenu = [
  {
    title: 'Về chúng tôi',
    to: '/profile',
  },
  {
    title: 'Đối tác',
    to: '/profile#introductions',
    id: '#introductions',
    smooth: true,
    // scroll: {(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
  },
  {
    title: 'Tuyển dụng',
    to: '/job-opportunities',
  },
];

const itemsMenu = [
  {
    title: 'Sản phẩm hãng Sika',
    children: {
      title: 'SIKA SOLUTIONS',
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
          title: 'Giải pháp vữa',
          to: '/',
        },
        {
          title: 'Chống thấm Masterseal',
          to: '/',
        },
        {
          title: 'Phụ gia xi măng',
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
          title: 'Công nghệ bê tông',
          to: '/',
        },
        {
          title: 'Công nghệ xi măng',
          to: '/',
        },
        {
          title: 'Chống thấm Mc-Bifi',
          to: '/',
        },
        {
          title: 'Hệ thống sửa chữa Mc-Bifi',
          to: '/',
        },
      ],
    },
  },
];

const projectsMenu = [
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
];

export { profileMenu, itemsMenu, projectsMenu };
