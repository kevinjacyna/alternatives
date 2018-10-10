import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';

import { iOSColors, iOSUIKit, human, systemWeights, sanFranciscoWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import beer from './beer.png';
import headphones from '../images/headphones.png';
import dumbbell from '../images/dumbbell.png';
import fries from '../images/french-fries.png';
import tickets from '../images/tickets.png';
import movies from '../images/frame.png';

const COLOR_OPACITY = '0.08';

class ResultCard extends Component {

    getIcon() {
        switch(this.props.category) {
            case 'food':
                return fries
            case 'music':
                return headphones;
            case 'exercise':
                return dumbbell
            case 'alcohol':
                return beer;
            case 'tickets':
                return tickets;
            case 'movies':
                return movies;
            default:
                return beer;
        }
    }

    getColor() {
        switch(this.props.category) {
            case 'food':
                return colors.grey;
            case 'music':
                return colors.blue;
            case 'exercise':
                return colors.purple;
            case 'alcohol':
                return colors.red;
            case 'tickets':
                return colors.green;
            case 'movies':
                return colors.yellow;
            default:
                return colors.orange;
        }
    }

    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 1,
            borderWidth: 0.5, borderColor: '#dddddd', marginBottom: 18, borderRadius: 5, alignSelf: 'flex-start', backgroundColor: this.getColor() }}>
                <View style={[styles.imageView, {backgroundColor: this.getColor()} ]}>
                    <Image style={styles.image} source={this.getIcon()} />
                </View>
                <View style={styles.homeCardTextView}>
                    <Text style={styles.descriptionText}>{this.props.type}</Text>
                    <View style={styles.uploaderAndStars}>
                        <View style={{ flexDirection: 'column', alignSelf: 'flex-start', marginRight: 50}}>
                                <Text style={styles.likesText}>{this.props.uploader}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ResultCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
    },
    homeCardTextView: {
        flex: 1.5,
        alignItems: 'flex-start',
        //justifyContent: 'space-evenly',
        paddingLeft: 10,
    },
    homesCardImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    descriptionText: {
        ... sanFranciscoWeights.regular,
        fontSize: 15,
        paddingTop: 10,
        marginBottom: 5,
        color: 'black',
        opacity: 0.8
    },
    roomNameText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    roomPrice: {
        fontSize: 10
    },
    categoryText: {
        ...human.headline,
        color: iOSColors.white
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0, 4, 0.1)',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5
    },
    likesText: {
        ... sanFranciscoWeights.bold,
        fontSize: 13,
        paddingTop: 10,
        marginBottom: 5,
        color: 'black',
        opacity: 0.8,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end'
    },
    starStyle: {
        alignSelf: 'flex-end',
        paddingLeft: 30,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    posterStyle: {
        paddingBottom: 10
    },
    uploaderAndStars: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 5,
        left: 5
    },
    likesTextStyle: {
        ...sanFranciscoWeights.regular,
        color: 'grey',
        fontSize: 11,
        paddingLeft: 3
    }
});

const colors = {
    red: `rgba(252, 92, 101, ${COLOR_OPACITY})`,
    darkRed: `rgba(236, 59, 90, ${COLOR_OPACITY})`,
    orange: `rgba(253, 150, 67, ${COLOR_OPACITY})`,
    darkOrange: `rgba(250, 130, 49, ${COLOR_OPACITY})`,
    yellow: `rgba(254, 211, 48, ${COLOR_OPACITY})`,
    darkYellow: `rgba(247, 183, 49, ${COLOR_OPACITY})`,
    green: `rgba(38, 222, 129, ${COLOR_OPACITY})`,
    darkGreen: `rgba(32, 191, 107, ${COLOR_OPACITY})`,
    teel: `rgba(43, 203, 186, ${COLOR_OPACITY})`,
    darkTeel: `rgba(17, 185, 177, ${COLOR_OPACITY})`,
    blue: `rgba(69, 170, 242, ${COLOR_OPACITY})`,
    darkBlue: `rgba(45, 152, 219, ${COLOR_OPACITY})`,
    purpley: `rgba(75, 123, 236, ${COLOR_OPACITY})`,
    darkPurpley: `rgba(56, 103, 214, ${COLOR_OPACITY})`,
    purple: `rgba(166, 94, 234, ${COLOR_OPACITY})`,
    darkPurple: `rgba(136, 85, 208, ${COLOR_OPACITY})`,
    grey: `rgba(209, 216, 224, ${COLOR_OPACITY})`,
    darkGrey: `rgba(165, 177, 194, ${COLOR_OPACITY})`

};
