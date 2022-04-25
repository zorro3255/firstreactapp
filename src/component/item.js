import React from 'react';

class Item extends React.Component {
    render() {
        const { market_warning, market, korean_name, english_name } = this.props.data;
        return (<React.Fragment>
            <tr>
                <td>{market}</td>
                <td>
                    {korean_name}({english_name})
                </td>
            </tr>
        </React.Fragment>);
    }
}

export default Item;