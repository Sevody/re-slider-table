# re-slider-table

a slideable table component base on swiper(https://github.com/nolimits4web/Swiper)

## Install

```bash
npm install re-slider-table --save
```

## Usage

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SliderTable from 're-slider-table';

class Basic extends Component {
    render() {
        const header = [{
            key: 'c0',
            value: 'c0',
        }, {
            key: 'c1',
            value: 'c1',
        }, {
            key: 'c2',
            value: 'c2',
        }, {
            key: 'c3',
            value: 'c3',
        }, {
            key: 'c4',
            value: 'c4',
        }, {
            key: 'c5',
            value: 'c5',
        }];

        const data = [{ c0: 'c0', c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5' },
          { c0: 'c0', c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5' },
          { c0: 'c0', c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5' },
          { c0: 'c0', c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5' },
          { c0: 'c0', c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5' }];

        return <SliderTable title="test" header={header} data={data} />;
    }
}

ReactDOM.render(<Basic />, document.getElementById('root'));
```

## API

| props         | type                          | default      | description      |
| ------------- | ----------------------------- | ------------ | ---------------- |
| title         | PropTypes.string.isRequired   |              | 表格标题
| header        | PropTypes.array.isRequired    |              | 列表标题             |
| data          | ProTypes.array.isRequired     |              | 表格数据              |
| headerWidth   | PropTypes.string              | 36%          | 固定表头的宽度        |
| baseClassName | PropTypes.string              | slider-table | 组件类名             |
| defaultValue  | PropTypes.string              | --           | 表格数据为空时默认显示的内容 |
| columnNum     | PropTypes.number              | 2            | 每个一个滑片的列数        |
| slideable     | PropTypes.bool                | false        | 是否支持滑动           |

## LICENSE

MIT
