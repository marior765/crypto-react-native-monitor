import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { images } from '../Utils/CoinIcons';
import ItemContainer from './ItemContainer';

class Item extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        return fetch('https://api.coinmarketcap.com/v2/ticker/?start=1&limit=10&sort=id&structure=array')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return(
            <FlatList
                data={this.state.data}
                renderItem={({item}) =>
                    <ItemContainer
                        symbol={item.symbol}
                        name={item.name}
                        value={item.quotes.USD.price}
                        inHours={item.quotes.USD.percent_change_24h}
                        inWeek={item.quotes.USD.percent_change_7d} />}
                keyExtractor={item => item.index_id}/>
        )
    }
}

export default Item;