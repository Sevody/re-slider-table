import React, { Component, PropTypes } from 'react';
import Swiper from '../node_modules/swiper/dist/js/swiper.min.js';
import './SlideTable.less';
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
        })
    }
    componentDidUpdate(nextProps, nextState) {
        this.swiper.update();
    }
    render() {
        let slides = React.Children.map(this.props.children, function(child, index) {
            return <div className="swiper-slide" key={`slider-${index}`}>{child}</div>
        });
        return (
            <div className={`${this.props.customClassName}`} style={{width: this.props.width}} >
            <div className={`swiper-container swiper-container-${this.name}`}>
                <div className="swiper-wrapper">
                    {slides}
                </div>
            </div>
                <div className={`swiper-button-prev swiper-prev-${this.name}`}></div>
                <div className={`swiper-button-next swiper-next-${this.name}`}></div>
            </div>
        )
    }
}

class KmcSlideTable extends Component {
    constructor(props) {
        super(props);
        this.name = (Math.random() * 100000000).toString().substr(0,5);
    }
    render() {
        const { data, header, title, defaultValue, columnNum, headerWidth, baseClassName, slideable } = this.props;
        const dataColumnWidth = `${1 / columnNum * 100}%`;
        const headerColumnWidth = headerWidth.replace(/$|%$/, '%');
        const sliderWidth = `${100 - parseFloat(headerWidth.replace('%', ''))}%`;
        const tableHeader = header.map((title, index) => {
            return (<ul className="table-header" key={`title-${index}`}>
                        <li className="title-text" key={`title-${index}`}>{title.key}</li>
                    </ul>)
        });
        const tableColumn = data.map((info, index) => {
            return (
                <ul className="column-container" style={{width: dataColumnWidth}} key={`column-${index}`}>
                    {
                        header.map((title, index) => {
                           return <li className="row-text" key={`row-${index}`}>{info[title.value] || defaultValue}</li>
                        })
                    }
                </ul>
            )
        })
        const sliders = [];
        let slider = [];
        let sliderIndex = 0;
        for (let i = 0; i < tableColumn.length; i++) {
            slider.push(tableColumn[i]);
            if ((i + 1) % columnNum === 0 || (i + 1) === tableColumn.length) {
                sliders.push(<div className="table-slider" key={`slider-${sliderIndex++}`}>
                            {slider}
                            </div>)
                slider = [];
            }
        }
        return (
            <div className={`${baseClassName}`}>
                <div className="table-title">{title}</div>
                    <div className={`${baseClassName}-main`}>
                        <div className="header-container" style={{width: headerColumnWidth}}>
                            {tableHeader}
                        </div>
                        <SwiperWrapper name={this.name} slideable={slideable} width={sliderWidth} customClassName="slider-container">
                            {sliders}
                        </SwiperWrapper>
                    </div>
                </div>
        )
    }
}

KmcSlideTable.defaultProps = {
    baseClassName: 'slider-table', // 组件类名
    defaultValue: '--', // 表格数据为空时，默认显示的内容
    columnNum: 2,   // 每个一个滑片的列数
    headerWidth: '36%', // 表头的宽度
    slideable: false,   // 是否支持滑动
};

KmcSlideTable.propTypes = {
    title: PropTypes.string.isRequired, // 表格标题
    header: PropTypes.array.isRequired, // 表格标题
    data: PropTypes.array.isRequired, // 表格数据
};

export default SlideTable;
