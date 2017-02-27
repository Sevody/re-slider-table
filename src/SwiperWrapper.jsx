import React, { Component, PropTypes } from 'react';
import Swiper from 'swiper';
import './SliderTable.less';
import '../node_modules/swiper/dist/css/swiper.css';

class SwiperWrapper extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.swiper = null;
    }
    componentDidMount() {
        this.swiper = new Swiper(`.swiper-container.swiper-container-${this.name}`, {
            prevButton: `.swiper-button-prev.swiper-prev-${this.name}`,
            nextButton: `.swiper-button-next.swiper-next-${this.name}`,
            onlyExternal: this.props.slideable,
        });
    }
    componentDidUpdate() {
        this.swiper.update();
    }
    render() {
        const slides = React.Children.map(this.props.children, (child, index) =>
            <div className="swiper-slide" key={`slider-${index}`}>{child}</div>);
        return (
            <div className={`${this.props.customClassName}`} style={{ width: this.props.width }} >
                <div className={`swiper-container swiper-container-${this.name}`}>
                    <div className="swiper-wrapper">
                        {slides}
                    </div>
                </div>
                <div className={`swiper-button-prev swiper-prev-${this.name}`} />
                <div className={`swiper-button-next swiper-next-${this.name}`} />
            </div>
        );
    }
}

SwiperWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    slideable: PropTypes.bool.isRequired,
    width: PropTypes.string.isRequired,
    customClassName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default SwiperWrapper;
