import React, { Component } from 'react';
import './index.less';

class Carousel extends Component {
  slider?: any;
  constructor(props: any) {
    super(props);
    this.state = {
      classes: [],
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (state.classes.length) return null;

    const classes = createClassesArray(props);
    return { classes };

    function createClassesArray(props: any) {
      const { children } = props;
      if (!Array.isArray(children)) return [];

      let id = Math.floor((children.length - 1) / 2);
      let direction = 'before';
      let classesArray: any = [];

      children.forEach(() => {
        if (id === 0) direction = 'current';
        if (id < 0) direction = 'after';

        classesArray.push({ classname: direction, id: Math.abs(id) });
        id--;
      });
      return classesArray;
    }
  }

  moveSlide = (direction: any, count: any) => {
    console.log('click');
    let { classes }: any = this.state;

    if (direction === 'after') {
      // 4 -1  3,1
      let start = classes.length - count;
      let last = classes.splice(start, count);
      classes = [...last, ...classes];
    } else {
      let first = classes.splice(0, count);
      classes = [...classes, ...first];
    }
    this.setState({ classes });
  };

  sliderRef = (node: any) => {
    this.slider = node;
  };

  renderSlides = () => {
    const { children, transition }: any = this.props;
    if (!Array.isArray(children)) return <div></div>;

    const { classes }: any = this.state;

    return children.map((img, index) => {
      let classNames =
        'slider3d__item slider3d__item--' +
        classes[index].classname +
        ' slider3d__item--' +
        classes[index].id;
      let direction = classes[index].classname;

      return (
        <li
          key={index}
          className={classNames}
          style={{ transition: `${transition}ms` }}
          onClick={() => this.moveSlide(direction, classes[index].id)}
        >
          {classes[index].id < 6 && classes[index].id > -6 ? (
            img
          ) : (
            <img
              data-src={img.props.src}
              alt={img.props.src}
              style={{ display: 'block' }}
            />
          )}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="slider3d">
        <ul className="slider3d__items">{this.renderSlides()}</ul>

        <nav>
          <button
            className="slider3d__button slider3d__button--left"
            onClick={() => this.moveSlide('before', 1)}
          ></button>
          <button
            className="slider3d__button slider3d__button--right"
            onClick={() => this.moveSlide('after', 1)}
          ></button>
        </nav>
      </div>
    );
  }
}

export default Carousel;
