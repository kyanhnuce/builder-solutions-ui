import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import Intro from '~/components/Intro';
import Images from '~/components/Images/Images';
import { projectsItem } from '~/array/arrayProjects';

const cx = classNames.bind(styles);

function Solutions() {
  const [projectValue, setProjectValue] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }

    const fetchData = async () => {
      const result = await projectsItem.find((data) => data.link === pathname);
      setProjectValue(result);
      setIsDataFetched(true);
    };

    fetchData();
  }, [pathname]);

  console.log(pathname);
  const settings = {
    centerPadding: '20px',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 780, // Breakpoint cho thiết bị di động
        settings: {
          centerPadding: '20px',
          slidesToShow: 1, // Hiển thị 1 slide
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className={cx('wrapper')}>
      <Intro projects />
      {isDataFetched === true && (
        <div className={cx('container')}>
          <h1>Projects</h1>
          <span>{projectValue.content}</span>
          <Slider className={cx('projects')} {...settings}>
            {projectValue.projects.map((item) => (
              <div className={cx('projects-content')}>
                <div className={cx('projects-image')}>
                  <Images
                    className={cx('projects-img')}
                    src={item.images}
                    alt={item.title}
                  />
                </div>
                <div className={cx('projects-name')}>
                  <h3 className={cx('projects-title')}>{item.title}</h3>
                  <h4 className={cx('projects-address')}>
                    <FontAwesomeIcon
                      className={cx('projects-icon')}
                      icon={faLocationDot}
                    />
                    &nbsp;
                    {item.address}
                  </h4>
                  <h4 className={cx('projects-time')}>{item.time}</h4>
                </div>
                <div className={cx('projects-info')}>
                  <h3 className={cx('projects-title')}>{item.title}</h3>
                  <h4 className={cx('projects-address')}>
                    <FontAwesomeIcon
                      className={cx('projects-icon')}
                      icon={faLocationDot}
                    />
                    &nbsp;
                    {item.address}
                  </h4>
                  <h4 className={cx('projects-time')}>{item.time}</h4>
                  <p className={cx('projects-des')}>{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Solutions;
