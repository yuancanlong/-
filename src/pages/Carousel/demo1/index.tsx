import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Carousel from './components';
import './styles.less';

const CLIENT_ID =
  '31cf57d170cbbbbc9c5f5f671cb612b275d5b3a83722ecebd754bf4661fe0388';
const server = 'https://api.unsplash.com';

export default class Demo extends Component {
  state = {
    photos: [],
  };

  //   componentWillMount() {
  //     axios
  //       .get(
  //         `${server}/search/photos/?client_id=${CLIENT_ID}&per_page=50&query=animal&orientation=landscape`,
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         this.setState({ photos: res.data.results });
  //       });
  //   }

  renderImages = () => {
    //     const { photos } = this.state;
    //     if (!photos.length) return <div>Loading...</div>;
    // return photos.map((img: any) => (
    //       <img key={img.id} src={img.urls.regular} alt={'photo'} />
    // ));
    return [
      <img
        key={'1'}
        src="https://picsum.photos/800/300/?random"
        alt={'photo'}
      />,
      <img
        key={'2'}
        src="https://picsum.photos/800/301/?random"
        alt={'photo'}
      />,
      <img
        key={'3'}
        src="https://picsum.photos/800/302/?random"
        alt={'photo'}
      />,
      <img
        key={'4'}
        src="https://picsum.photos/800/303/?random"
        alt={'photo'}
      />,
      <img
        key={'5'}
        src="https://picsum.photos/800/304/?random"
        alt={'photo'}
      />,
    ];
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', margin: '40px 0' }}>
          Simple react 3d carousel
        </h1>
        {/* @ts-ignore */}
        <Carousel transition={500} lazyLoad={true}>
          {this.renderImages()}
        </Carousel>
      </div>
    );
  }
}
