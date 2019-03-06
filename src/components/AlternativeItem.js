import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';

const { height, width } = Dimensions.get('window');
const tileWidth = width / 2.60;
const tileHeight = width * 0.59;
const backgroundOpacity = 0.2;
import { iOSColors, human, sanFranciscoWeights } from 'react-native-typography';

class AlternativeItem extends Component {
    render() {
        const alternative = this.props.alternative["item"];
        return (
            <View style={{ width: tileWidth, height: tileHeight,
                borderWidth: 1.0, borderColor: '#dddddd', marginBottom: 18, borderRadius: 5,
                alignSelf: 'flex-start', backgroundColor: iOSColors.white, marginRight: 20, justifyContent: 'space-evenly' }}>

                <View style={styles.restaurantNameView}>
                    <Text style={styles.restaurantNameText}>{this.getRestaurant(alternative)}</Text>
                    <View style={[ styles.underline, {backgroundColor: this.getBackgroundColor(alternative)}]} />
                </View>

                <View style={styles.menuItemDescriptionView}>
                    <Text style={styles.menuItemDescriptionText}>{alternative["title"]}</Text>
                </View>

                <View style={styles.price}>
                    <Text style={styles.priceText}>${parseFloat(Math.round(alternative["price"] * 100) / 100).toFixed(2)}</Text>
                </View>
            </View>
        );
    }

    getBackgroundColor(alternative) {
        switch (alternative["location"]) {
            case "sauder-cafe":
                return iOSColors.tealBlue;
            case "bento-sushi":
                return iOSColors.yellow;
            case "mercante":
                return iOSColors.red;
            case "ikes":
                return iOSColors.orange;
            case "triple-o":
                return iOSColors.green;
            case "harvest":
                return iOSColors.blue;
            case "pie-r":
                return iOSColors.pink;
            case "booster-juice":
                return iOSColors.purple;
            case "subway":
                return iOSColors.green;
            case "delly":
                return iOSColors.yellow;
            default:
                return iOSColors.tealBlue;
        }
    }
    getRestaurant(alternative) {
        switch (alternative["location"]) {
            case "delly":
                return "The Delly";
            case "sauder-cafe":
                return "Sauder Cafe";
            case "bento-sushi":
                return "Bento Sushi";
            case "mercante":
                return "Mercante";
            case "ikes":
                return "Ikes";
            case "triple-o":
                return "Triple O's";
            case "harvest":
                return "Harvest";
            case "pie-r":
                return "Pie R";
            case "booster-juice":
                return "Booster Juice";
            case "subway":
                return "Subway";
            default:
                return "Sauder Cafe";
        }
    }
}

export default AlternativeItem;

const styles = StyleSheet.create({
    image: {
        paddingTop: 50,
        width: 130,
        height: 130,
    },
    title: {
        flex: 1,
        alignItems: 'flex-start',
        //justifyContent: 'space-evenly',
        paddingLeft: 10,
        paddingTop: 10,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    menuItemDescriptionView: {
        flex: 0,
        flexGrow: 1,
        alignItems: 'flex-start',
        paddingTop: 5,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        height: tileHeight * 0.33
    },
    price: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
        marginBottom: 0
    },
    restaurantNameView: {
        ... sanFranciscoWeights.regular,
        fontSize: 20,
        paddingTop: 0,
        marginBottom: 5,
        color: 'black',
        opacity: 0.8,
        flex: 1,
        flexGrow: 1,
        width: tileWidth,
    },
    restaurantNameText: {
        ... sanFranciscoWeights.semibold,
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: 10,
        marginBottom: 5,
        color: 'black',
        opacity: 0.9,
        flex: 1,
        flexGrow: 1,
        width: tileWidth,
        flexDirection: 'row'
    },
    menuItemDescriptionText: {
        ... sanFranciscoWeights.regular,
        fontSize: 21,
        paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        alignItems: 'flex-start',
        color: 'black',
        opacity: 0.9,
        flex: 1,
        flexGrow: 1,
        width: tileWidth,
        flexDirection: 'row'
    },
    priceText: {
        ... sanFranciscoWeights.bold,
        fontSize: 18,
        paddingTop: 0,
        marginBottom: 0,
        color: 'black',
        opacity: 0.8
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0, 4, 0.1)',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        paddingTop: 35,
    },
    underline: {
    width: tileWidth - 20,
    height: 3,
    backgroundColor: 'purple',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
},
});
