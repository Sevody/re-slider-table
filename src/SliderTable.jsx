import React, { Component, PropTypes } from 'react';
import SwiperWrapper from './SwiperWrapper';

class SliderTable extends Component {
    constructor(props) {
        super(props);
        this.name = (Math.random() * 100000000).toString().substr(0, 5);
    }
    render() {
        const { data, header, title, defaultValue, columnNum, headerWidth, baseClassName, slideable } = this.props;
        const dataColumnWidth = `${(1 / columnNum) * 100}%`;
        const headerColumnWidth = headerWidth.replace(/$|%$/, '%');
        const sliderWidth = `${100 - parseFloat(headerWidth.replace('%', ''))}%`;
        const tableHeader = header.map((ttl, index) => (<ul className="table-header" key={`title-${index}`}>
            <li className="title-text" key={`title-${index}`}>{ttl.key}</li>
        </ul>));
        const tableColumn = data.map((info, index) => (
            <ul className="column-container" style={{ width: dataColumnWidth }} key={`column-${index}`}>
                {
                        header.map((ttl, i) =>
                            <li className="row-text" key={`row-${i}`}>{info[ttl.value] || defaultValue}</li>)
                    }
            </ul>
            ));


        const sliders = [];
        let slider = [];
        let sliderIndex = 0;
        for (let i = 0; i < tableColumn.length; i++) {
            slider.push(tableColumn[i]);
            if ((i + 1) % columnNum === 0 || (i + 1) === tableColumn.length) {
                sliders.push(<div className="table-slider" key={`slider-${sliderIndex++}`}>
                    {slider}
                </div>);
                slider = [];
            }
        }
        return (
            <div className={`${baseClassName}`}>
                <div className="table-title">{title}</div>
                <div className={`${baseClassName}-main`}>
                    <div className="header-container" style={{ width: headerColumnWidth }}>
                        {tableHeader}
                    </div>
                    <SwiperWrapper
                        name={this.name}
                        slideable={slideable}
                        width={sliderWidth}
                        customClassName="slider-container"
                    >
                        {sliders}
                    </SwiperWrapper>
                </div>
            </div>
        );
    }
}

SliderTable.defaultProps = {
    baseClassName: 'slider-table', // 组件类名
    defaultValue: '--', // 表格数据为空时，默认显示的内容
    columnNum: 2,   // 每个一个滑片的列数
    headerWidth: '36%', // 表头的宽度
    slideable: false,   // 是否支持滑动
};

SliderTable.propTypes = {
    title: PropTypes.string.isRequired, // 表格标题
    header: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
        }),
    ).isRequired, // 表格标题
    data: PropTypes.arrayOf(PropTypes.object).isRequired, // 表格数据
    baseClassName: PropTypes.string,
    defaultValue: PropTypes.oneOfType([React.PropTypes.string, PropTypes.number]),
    columnNum: PropTypes.number,
    headerWidth: PropTypes.string,
    slideable: PropTypes.bool,
};

export default SliderTable;
