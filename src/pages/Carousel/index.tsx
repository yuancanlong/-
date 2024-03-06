import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import './style.less';
import { clone } from 'lodash';

// const isEqual = require("react-fast-compare");

const Carousel = (props: any) => {
  const [slideTotal, setSlideTotal] = useState(0);
  const [slideCurrent, setSlideCurrent] = useState(-1);
  const [slides, setSlides] = useState<any[]>([]);
  //   let slides = [
  //     <img src="https://picsum.photos/800/300/?random" alt="1" />,
  //     <img src="https://picsum.photos/800/301/?random" alt="2" />,
  //     <img src="https://picsum.photos/800/302/?random" alt="3" />,
  //     <img src="https://picsum.photos/800/303/?random" alt="4" />,
  //     <img src="https://picsum.photos/800/304/?random" alt="5" />,
  //   ];
  const [height, setHeight] = useState('600px');
  const intervalRef = useRef<any>(null);
  const nextRef = useRef<any>();

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => {
    const locSlides: any = [];
    const data = [
      <img src="https://picsum.photos/800/300/?random" alt="1" />,
      <img src="https://picsum.photos/800/301/?random" alt="2" />,
      <img src="https://picsum.photos/800/302/?random" alt="3" />,
      <img src="https://picsum.photos/800/303/?random" alt="4" />,
      <img src="https://picsum.photos/800/304/?random" alt="5" />,
    ];
    data?.forEach((slide: any) => {
      const slideobject = {
        class: 'slider-single proactivede',
        element: slide,
      };
      locSlides.push(slideobject);
    });
    if (data?.length === 2) {
      data.forEach((slide: any) => {
        const slideobject = {
          class: 'slider-single proactivede',
          element: slide,
        };
        locSlides.push(slideobject);
      });
    }
    setSlides(locSlides);
    setSlideTotal(locSlides?.length - 1);
    setSlideCurrent(-1);
    if (slideCurrent === -1) {
      setTimeout(() => {
        nextRef?.current?.click();
        if (props.autoplay) {
          intervalRef.current = setTimeout(() => {
            nextRef?.current?.click();
          }, props.interval);
        }
      }, 500);
    }
  }, [props.slides]);
  useEffect(() => {
    // if (slideCurrent === -1) {
    setTimeout(() => {
      //   slideRight();
    }, 2000);
    // }
  }, [slides, slideCurrent]);

  const slideRight = useCallback(() => {
    let preactiveSlide: any;
    let proactiveSlide: any;
    let slideCurrentLoc = slideCurrent;

    const activeClass = 'slider-single active';
    const slide: any = [...slides];
    if (slides.length > 0) {
      if (slideTotal > 1) {
        if (slideCurrentLoc < slideTotal) {
          slideCurrentLoc++;
        } else {
          slideCurrentLoc = 0;
        }
        if (slideCurrentLoc > 0) {
          preactiveSlide = slide[slideCurrentLoc - 1];
        } else {
          preactiveSlide = slide[slideTotal];
        }
        console.log(slideCurrentLoc, '2');

        const activeSlide: any = slide[slideCurrentLoc];
        if (slideCurrentLoc < slideTotal) {
          proactiveSlide = slide[slideCurrentLoc + 1];
        } else {
          proactiveSlide = slide[0];
        }
        slide.forEach((slid: any, index: any) => {
          if (slid?.calss?.includes('preactivede')) {
            slid.calss = 'slider-single proactivede';
          }
          if (slid?.calss?.includes('preactive')) {
            slid.calss = 'slider-single preactivede';
          }
        });

        preactiveSlide['class'] = 'slider-single preactive';
        activeSlide.class = activeClass;
        proactiveSlide['class'] = 'slider-single proactive';

        setSlides(slide);
        setSlideCurrent(slideCurrentLoc);
        if (
          document.getElementsByClassName('slider-single active').length > 0
        ) {
          setTimeout(() => {
            if (
              document.getElementsByClassName('slider-single active').length > 0
            ) {
              const height = document.getElementsByClassName(
                'slider-single active',
              )[0].clientHeight;
              setHeight(`${height}px`);
            }
          }, 500);
        }
        //   props.onSlideChange(slideCurrentLoc);
        //   if (props.autoplay) {
        //     clearTimeout(intervalRef.current);
        //     intervalRef.current = setTimeout(() => {
        //       nextRef.current.click();
        //     }, props.interval);
        //   }
      } else if (slide[0] && slide[0]?.class !== activeClass) {
        slide[0].class = activeClass;
        setSlides(slide);
        setSlideCurrent(0);
      }
    }
  }, [slides]);
  const slideLeft = useCallback(() => {
    if (slideTotal > 1) {
      let preactiveSlide: any;
      let proactiveSlide: any;
      let slideCurrentLoc = slideCurrent;
      const slide: any = [...slides];
      if (slideCurrentLoc > 0) {
        slideCurrentLoc--;
      } else {
        slideCurrentLoc = slideTotal;
      }
      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }
      let activeSlide: any = slide[slideCurrentLoc];
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }
      slide.forEach((slid: any, index: any) => {
        if (slid?.class.includes('proactivede')) {
          slid.class = 'slider-single preactivede';
        }
        if (slid?.class.includes('proactive')) {
          slid.class = 'slider-single proactivede';
        }
      });
      preactiveSlide.class = 'slider-single preactive';
      activeSlide.class = 'slider-single active';
      proactiveSlide.class = 'slider-single proactive';
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      //   props.onSlideChange(slideCurrentLoc);
      if (document.getElementsByClassName('slider-single active').length > 0) {
        setTimeout(() => {
          if (
            document.getElementsByClassName('slider-single active').length > 0
          ) {
            const height = document.getElementsByClassName(
              'slider-single active',
            )[0].clientHeight;
            setHeight(`${height}px`);
          }
        }, 500);
      }
    }
  }, [slides]);

  const sliderClass = (direction: any) => {
    let sliderClass = `slider-${direction}`;
    // if (!props.arrows) {
    //   sliderClass = 'slider-disabled';
    // } else if (props.arrows && !props.arrowBorders) {
    // sliderClass = `slider-${direction}-noborders`;
    // }
    return sliderClass;
  };

  return (
    // <div className="react-3d-carousel" style={{ height }}>
    <div className="react-3d-carousel" style={{ height }} {...handlers}>
      {slides && slides.length > 0 && (
        <div className="slider-container">
          <div className="slider-content">
            {slides.map((slider: any, index: any) => {
              return (
                <div className={slider?.class} key={index}>
                  <div className={sliderClass('left')} onClick={slideLeft}>
                    {/* <div>
                      <i className="fa fa-arrow-left"></i>
                    </div> */}
                  </div>
                  <div
                    className={sliderClass('right')}
                    onClick={slideRight}
                    ref={nextRef}
                  >
                    {/* <div>
                      <i className="fa fa-arrow-right"></i>
                    </div> */}
                  </div>

                  <div className="slider-single-content">{slider.element}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
// Carousel.propTypes = {
//   slides: PropTypes.arrayOf(PropTypes.element),
//   autoplay: PropTypes.bool,
//   interval: PropTypes.number,
//   arrows: PropTypes.bool,
//   arrowBorders: PropTypes.bool,
//   onSlideChange: PropTypes.func,
// };
// Carousel.defaultProps = {
//   autoplay: false,
//   interval: 3000,
//   arrows: true,
//   arrowBorders: true,
//   onSlideChange: function () {},
// };
export default Carousel;
