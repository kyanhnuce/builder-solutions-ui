import images from '~/assets/images';

const projectsItem = [
  {
    id: 1,
    images: images.local,
    namepr: 'local-projects',
    link: '/projects/local-projects',
    alt: 'Trong nước',
    title: 'Trong Nước',
    description:
      'Những công trình được sử dụng sản phẩm bởi các hãng do Builder-Solutions cung cấp vận hành trong nước',
    content:
      'Chào mừng bạn đến kho tàng, nơi ghi dấu hành trình Sika trên khắp Việt Nam. Và cũng là nơi chúng tôi gửi gắm những giải pháp xây dựng tiên tiến từ Thụy Sĩ, những kỹ thuật tâm đắc nhất vào công trình. Tại đây, bạn sẽ được chiêm ngưỡng đủ loại mô hình dự án từ trọng điểm như Nhà máy Thủy điện, Nhiệt điện, Nhà máy Xử lý Nước thải, Điện gió, Sân bay, Cao tốc, Cầu đường cho đến Cao ốc Văn phòng, Chung cư hay Nhà phố, Nhà ở dân dụng,...',
    projects: [
      {
        title: 'Nhà máy sản xuất Ô-tô Vinfast',
        address: 'Hải Phòng',
        time: '2017',
        description:
          'Nhà máy sản xuất dây chuyền Vinfast được xây dựng trên khu đất rộng 365 héc-ta. Nhà máy sản xuất phụ tùng gốc (OEM) đầu tiên ở Việt Nam sử dụng công nghệ Đức.',
        images:
          'https://sika.scene7.com/is/image/sika/02-en_VN_Vinfast%20Factory(1)-3x2:3-2?fit=crop%2C1&wid=1280&hei=853&fmt=webp-alpha',
      },
      {
        title: 'DỰ ÁN PHỨC HỢP HÓA LỌC DẦU NGHI SƠN',
        address: 'Thanh Hóa, Việt Nam',
        time: '2017',
        description:
          'Dự án phức hợp Hóa Lọc Dầu Nghi Sơn là dự án liên doanh được tài trợ bởi 4 tập đoàn: Tập đoàn Dầu khí Việt Nam (PetroVietnam), Kuwait Petroleum Europe BV (KPE) từ Kuwait, Idemitsu Kosan Co., Ltd và Mitsui Chemical, Inc. . Từ Nhật Bản. Dự án này có tổng kinh phí đầu tư ước tính khoảng 9 tỷ USD, trong đó đóng góp của nhà tài trợ khoảng 4 tỷ USD. Nhà máy lọc dầu này có công suất chế biến 200.000 thùng dầu thô nhập khẩu từ Kuwait mỗi ngày (tương đương 10 triệu tấn mỗi năm). Loại nhiên liệu chiếm tỷ trọng lớn nhất trong sản phẩm là diesel cao cấp (2.204 kt / năm), sau đó là diesel thường (1.470 kt / năm), RON 92, RON 95 (1.153 kt / năm), LPG, nhiên liệu máy bay và nhiều loại hóa dầu các sản phẩm.',
        images:
          'https://sika.scene7.com/is/image/sika/02-en_VN_Nghi%20Son%20factor(1)-3x2:3-2?fit=crop%2C1&wid=1280&hei=853&fmt=webp-alpha',
      },
      {
        title: 'DỰ ÁN CHUỖI SIÊU THỊ GO! - MÁI PIN MẶT TRỜI',
        address: 'Biên Hòa, Việt Nam',
        time: '2017',
        description:
          'Với 4 dự án trải dài khắp nước gồm Nha Trang, Mỹ Tho, Buôn Mê Thuột và Biên Hòa. Từ năm 2017, GO! ứng dụng các hệ thống của Sika từ hầm tới mái không chỉ có chống thấm mà còn có các sản phẩm phục vụ tính bền vững, ứng dụng mái lắp đặt pin năng lượng mặt trời.',
        images:
          'https://sika.scene7.com/is/image/sika/02-vn-supermarket-roofing_Sarnafil%20S%20327%20(3):3-2?fit=crop%2C1&wid=1200&hei=800&fmt=webp-alpha',
      },
      {
        title: 'DỰ ÁN SÀN CHỐNG TĨNH ĐIỆN',
        address: 'Bình Dương, Việt nam',
        time: '2021',
        description:
          'Công ty Phonak Operation Center Việt Nam đã đưa vào hoạt động nhà máy đặt tại tỉnh Bình Dương, sản xuất thiết bị/ máy trợ thính. Đáp ứng yêu cầu của chủ đầu tư đối với sàn tĩnh điện, Sika cùng Bá Đạt làm việc trực tiếp với chủ đầu tư để tư vấn và cung cấp sản phẩm Sikafloor®-262 AS N với khoảng 1,300 m2 .',
        images:
          'https://sika.scene7.com/is/image/sika/FAC_SONOVA%20-%20Sikafloor%20ESD%20(6):3-2?fit=crop%2C1&wid=1200&hei=800&fmt=webp-alpha',
      },
      {
        title: 'DỰ ÁN PHỨC HỢP SÀI GÒN CENTRE',
        address: 'Quận 1, Tp. HCM, Việt Nam',
        time: '2018',
        description:
          'Sai Gon Central là tòa nhà phức hợp gồm 6 tầng hầm, 6 tầng trung tâm thương mại và 44 tầng chức năng khác. Dự án nằm tại trung tâm Sài Gòn.',
        images:
          'https://sika.scene7.com/is/image/sika/02-en_VN-SaigonCentral(2)3x2:3-2?fit=crop%2C1&wid=1280&hei=853&fmt=webp-alpha',
      },
      {
        title: 'SÂN BAY QUỐC TẾ ĐÀ NẴNG - TERMINAL 2',
        address: 'ĐÀ NẴNG, VIỆT NAM',
        time: '2015',
        description:
          'Nhà ga được thiết kế có hai tầng riêng biệt dành cho các chuyến bay đến và đi với tổng diện tích sàn là 48.000m2. Công suất dự kiến phục vụ 6 triệu lượt khách / năm.',
        images:
          'https://sika.scene7.com/is/image/sika/AP_DaNang-SikaBituseal-BD(4)3x2:3-2?fit=crop%2C1&wid=1280&hei=853&fmt=webp-alpha',
      },
    ],
  },
  {
    id: 2,
    images: images.international,
    namepr: 'international-projects',
    link: '/projects/international-projects',
    alt: 'Quốc tế',
    title: 'Quốc Tế',
    description:
      'Những công trình được sử dụng sản phẩm bởi các hãng do Builder-Solutions cung cấp vận hành tại thị trường quốc tế',
    content:
      'Tại đây, bạn sẽ được khai nhãn với đa dạng các mô hình mà chuỗi sản phẩm Sika ứng dụng vào. Từ sàn tới mái, nội và ngoại khu, nhà ở đến cao ốc văn phòng, sân bay, cầu đường đến cao tốc, hầm đường bộ.',
    projects: [
      {
        title: 'XÂY DỰNG NHÀ MÁY THỦY ĐIỆN NANT DE DRANCE',
        address: 'WALLIS, THỤY SĨ',
        time: '2019',
        description:
          'Người ta dựng một nhà máy thủy điện được xây dưới lòng đất giữa những ngọn núi ở Bang Wallis, phía tây của Thụy Sĩ, giáp ranh với Pháp. Đây là một trong số những nhà máy thủy điện trữ nước lớn nhất châu Âu, với công suất hàng năm là 900 MW, sản xuất khoảng 2,5 tỷ kWh điện.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-concrete-admixture-containers-dam-wallis:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'HỆ THỐNG TÀU ĐIỆN NGẦM QUITO',
        address: 'QUITO, ECUADOR',
        time: '2019',
        description:
          'Tuyến tàu điện ngầm xây mới hoàn toàn thuộc địa phận thành phố Quito, Nam Mỹ, Ecuador bao gồm hệ thống giao thông công cộng mới của thành phố với chiều dài hơn 22 km. Tuyến Tàu điện ngầm sẽ chạy từ bến xe buýt Quitumbe ở phía nam thành phố đến ga El Labrador ở phía bắc, xây dựng trên địa điểm trước kia đã từng là một sân bay. Thời gian xây dựng dự kiến ​​là khoảng 36 tháng. Các ga dọc tuyến sẽ được đặt tại Quitumbe, Morán Valverde, Solanda, El Calzado, El Recreo, La Magdalena, San Francisco, La Alameda, El Ejido, Universidad Central, La Pradera, La Carolina, Iñaquito, Jipijapa và El Labrador.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-metro-quito-tunnel-cover:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'HẦM ARROYO VEGA',
        address: 'BUENOS AIRES, ARGENTINA',
        time: '2019',
        description:
          'Dự án nhằm mục đích cải thiện hệ thống thoát nước của khu vực trung tâm của thành phố Buenos Aires, đặc biệt là vào mùa mưa. Dự án cải tạo hệ thống thoát nước trên diện tích 1.700 ha, với khoảng hơn 315.000 người đang sinh sống.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-tunnel-arroyo-vega-argentina-01:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'CẦU RIALTO',
        address: 'VENICE, Ý',
        time: '2017',
        description:
          'Thiết kế bởi Antonio da Ponte và hoàn thành vào 3 năm sau đó (năm 1591), cầu Rialto là một trong những cây cầu nổi tiếng nhất thế giới và chắc chắn là cây cầu nổi tiếng nhất ở Venice (Ý). Cây cầu nằm trên hai đường dốc, dài 48 mét với một vòm nhịp 22 mét duy nhất làm bằng đá. Trong suốt quá trình xây dựng cây cầu, từ quan điểm kỹ thuật nhiều người nhận xét đây là một dự án quá táo bạo, nhưng cây cầu vẫn đứng vững và trở thành một trong những kiến trúc biểu tượng của thành phố Venice.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-rialto-bridge-venice-03:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'PHÒNG PHẪU THUẬT BỆNH VIỆN YORK',
        address: 'YORK, ANH',
        time: '2017',
        description:
          'Sau thành công áp dụng hệ thống Sika ComfortFloor® đột phá trong công tác cải tạo một phòng đơn và buồng tắm trong phòng, Sika đã được giao trọng trách thay thế sàn của một trong những phòng phẫu thuật của Bệnh viện York.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-york-hospital-flooring-01:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'SỬA CHỮA MÁI SÂN BAY QUỐC TẾ HONG KONG',
        address: 'HONG KONG',
        time: '2016',
        description:
          'Sân bay Quốc tế Hồng Kông là một trong ba sân bay 5 sao Skytrax trên thế giới, là cửa ngõ vận chuyển hàng hóa nhộn nhịp nhất thế giới đồng thời cũng là một trong những sân bay có lượng hành khách đông nhất thế giới. Hệ thống chống thấm của sân bay  đã từng bị hư hỏng, do đó, Cơ quan Quản lý Sân bay Hồng Kông đã quyết định lắp đặt thêm một lớp màng chống thấm lên phía trên hệ thống hiện có.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-hong-kong-airport-roof-repair-7:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'TRUNG TÂM KỸ THUẬT VÀ VĂN PHÒNG LIMMAT',
        address: 'ZURICH, THỤY SĨ',
        time: '2016',
        description:
          'Thiết kế trung tâm văn phòng mới của Sika dựa trên việc sử dụng linh hoạt không gian nhiều chức năng, phản ánh các giá trị và thế mạnh của công ty. Sika muốn xây dựng môi trường làm việc tốt nhất cho lãnh đạo nhằm hỗ trợ, tăng cường hợp tác, trao đổi thông tin và quan trọng hơn là các giải pháp đổi mới, tất cả đều được tiến hành linh hoạt đến tối đa. Mục đích của thiết kế là cải thiện mức độ hài lòng của nhân viên và hiệu suất làm việc đồng thời thu được kết quả xuất sắc một cách bền vững cho chính Sika, cho khách hàng và cộng đồng.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-limmat-sika-office-01:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'BÃI ĐẬU XE Ở TRUNG TÂM MUA SẮM MANUFAKTURA',
        address: 'ŁÓDŹ, BA LAN',
        time: '2014',
        description:
          'Để phục vụ những khách hàng của trung tâm thương mại Manufaktura ở Łódź, chủ đầu tư đã quyết định xây thêm một bãi đậu xe rộng 12.000 m² trong khu vực. Các sàn đậu xe nhiều tầng đặc biệt được xây dựng từ tháng 5 đến tháng 11 năm 2014.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-car-parking-garage-manufaktura-02:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'XÂY DỰNG ĐẬP LUDEKE',
        address: 'MBIZANA, NAM PHI',
        time: '2014',
        description:
          'Đập Ludeke, trạm bơm và dạng kết cấu chính của thành đập dâng theo nước của Đề án cấp nước lớn Mbizana do Umgeni Water khởi xướng. Trải dài 240 m và cao gần 40m, con đập này sau khi xây dựng sẽ chứa hơn 14,5 triệu mét khối nước, cung cấp nước cho khoảng 266.000 người xung quanh đập.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-ludeke-dam-south-africa-construction-01:3-2?fit=crop%2C1&wid=1520&hei=1013&fmt=webp-alpha',
      },
      {
        title: 'TRUNG TÂM GIÁO DỤC TRẢI NGHIỆM CRAYOLA',
        address: 'ORLANDO, MỸ',
        time: '2014',
        description:
          'Trung tâm trải nghiệm Crayola, khai trương vào mùa hè vừa qua ở Orlando, Florida, là nơi trẻ em có thể khám phá “sự kỳ diệu của màu sắc”. Có 25 điểm tham quan tương tác cho trẻ thỏa sức vui chơi, khám phá và học hỏi. Hệ thống Sika ComfortFloor® PS-23 đã được sử dụng cho dự án rộng 30.577 feet vuông này vào năm 2015.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-decorative-floor-crayola-01:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'CẦU NEUTOR',
        address: 'ULM, ĐỨC',
        time: '2014',
        description:
          'Cây cầu nối Trung tâm Thành phố với 2 ngọn đồi nằm ở ngoại ô. Đồng thời nằm trên trục đường chính của 4 tuyến xe buýt, do đó cứ 2,5 phút lại có một chuyến xe đi qua cầu.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-neutor-bridge-construction-ulm-05:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
      {
        title: 'CẢI TẠO SÀN LÁT GẠCH NHÀ MÁY THỦY ĐIỆN',
        address: 'EGLISAU, THỤY SĨ',
        time: '2012',
        description:
          'Nhà máy thủy điện Eglisau-Glattfelden được xây dựng từ năm 1915 đến năm 1920. Từ năm 1988, Nhà Máy này đã được xếp vào danh sách những công trình có giá trị cần được bảo vệ ở bang Zurich. Trong năm 2012, các nhóm máy móc mới đã được đầu tư đầu tư để tăng sản lượng điện lên 30%. Đồng thời cải tạo lại một phần tòa nhà, dỡ bỏ lớp gạch men vỉa dày và thiết kế lại.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-renovation-hydropower-plant-eglisau:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
    ],
  },
  {
    id: 3,
    images: images.other,
    namepr: 'other-projects',
    link: '/projects/other-projects',
    alt: 'Khác',
    title: 'Dự Án Đặc Biệt',
    description:
      'Ngoài ra, có những dự án đặc biệt sử dụng các sản phẩm chuyên dụng như trụ điện gió, sân bay, công nghệ điện tử,...',
    content:
      'Tại đây, bạn sẽ được khai nhãn với đa dạng các mô hình mà chuỗi sản phẩm Sika ứng dụng vào. Từ sàn tới mái, nội và ngoại khu, nhà ở đến cao ốc văn phòng, sân bay, cầu đường đến cao tốc, hầm đường bộ.',
    projects: [
      {
        title: 'XÂY DỰNG NHÀ MÁY THỦY ĐIỆN NANT DE DRANCE',
        address: 'WALLIS, THỤY SĨ',
        time: '2019',
        description:
          'Người ta dựng một nhà máy thủy điện được xây dưới lòng đất giữa những ngọn núi ở Bang Wallis, phía tây của Thụy Sĩ, giáp ranh với Pháp. Đây là một trong số những nhà máy thủy điện trữ nước lớn nhất châu Âu, với công suất hàng năm là 900 MW, sản xuất khoảng 2,5 tỷ kWh điện.',
        images:
          'https://sika.scene7.com/is/image/sika/glo-concrete-admixture-containers-dam-wallis:3-2?fit=crop%2C1&wid=1620&hei=1080&fmt=webp-alpha',
      },
    ],
  },
  {
    id: 4,
    images: images.other,
    namepr: 'other-projects',
    alt: 'Contact',
    title: 'Kênh phân phối',
    description:
      'Hệ thống cửa hàng trong nước và quốc tế cùng với thông tin nhà máy của các hãng đối tác được sản xuất trong nước.',
  },
];

export { projectsItem };
