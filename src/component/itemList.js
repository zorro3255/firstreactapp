import React from 'react';
import axios from 'axios';
import Item from './item';

class ItemList extends React.Component {
    state = {
        data: [],
        searchWord: ''
    }

    componentDidMount() {
        const url = 'https://api.upbit.com/v1/market/all?isDetails=true';
        axios.get(url).then(response => { this.setState({ data: response.data }) }).catch(error => console.error(error));
    }

    render() {
        const itemElements = this.state.data.filter(item => item.korean_name.indexOf(this.state.searchWord) > -1 && item.market.indexOf('KRW') > -1).map(item => <Item data={item} key={item.market} />);

        return (
            <React.Fragment>
                <div>검색어 : <input type='text' /> <button type='button' onClick={(e) => this.setState({searchWord:'리플'})}>검색</button></div>
                <table>
                    <thead>
                        <tr>
                            <th>시장정보</th>
                            <th>한글명(영문명)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemElements}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default ItemList;