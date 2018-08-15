import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { images } from '../Utils/CoinIcons';
 
const itemContainer = (props) => {
    const round = (number) => {
        return +number.toFixed(3);
    }
    return (
        <View style={styles.container}>
            <Image
                    style={styles.image}
                    source={{ uri: images[props.symbol] }}
                />
            <View style={styles.infoContainer}>
                <View style={styles.element}>
                    <Text style={styles.bold}>{props.symbol}|{props.name}</Text>
                </View>
                <Text style={[styles.element, styles.bold]}>{round(props.value)}$</Text>
                <View style={styles.element}>
                    <Text style={props.inHours < 0 ? styles.negative : styles.positive}>24h:{props.inHours}%</Text>
                </View>
                <View style={styles.element}>
                    <Text style={props.inWeek < 0 ? styles.negative : styles.positive}>7d: {props.inWeek}%</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#FEFCFC'
    },
    positive: {
        color: 'green'
    },
    negative: {
        color: 'red'
    },
    bold: {
        fontWeight: 'bold'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '80%',
        marginLeft: '15%'
    },
    element: {
        marginLeft: '20%',
        marginTop: '10%'
    },
    image: {
        width: 35,
        height: 35,
        position: 'absolute',
        marginTop: 40,
        marginLeft: 30
    }
})

export default itemContainer;