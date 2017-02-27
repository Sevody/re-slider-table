import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SliderTable from '../';

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
