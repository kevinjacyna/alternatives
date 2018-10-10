import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native';
import firebase from 'firebase';
import { iOSUIKit, iOSColors } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';

import ResultCard from '../ResultCard';

const { height, width } = Dimensions.get('window');


export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData()     
    }

    getData = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyBxp0jcxG4ktr9-U9H2A4cRQcdsBWtPRqk",
              authDomain: "alternatives-9f4a1.firebaseapp.com",
              databaseURL: "https://alternatives-9f4a1.firebaseio.com",
              projectId: "alternatives-9f4a1",
              storageBucket: "alternatives-9f4a1.appspot.com",
              messagingSenderId: "133176862719"
          };
        firebase.initializeApp(firebaseConfig);
          var query = firebase.database().ref("alternatives").orderByKey();
          let alternativesList = [];
          query.once("value")
          .then(snapshot => {
            snapshot.forEach(childSnapshot => {
              // key will be "ada" the first time and "alan" the second time
              var key = childSnapshot.key;
              // childData will be the actual contents of the child
              var childData = childSnapshot.val();
              var price = childData["price"];
              console.log("This should be price" + price);
              console.log("This should be title "  + childData["title"])
              console.log(key + ":" + childData);
              alternativesList.push(childData);
              this.setState({ alternatives: alternativesList });
          });
        });
    }


    getResults() {
        
    }
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) => {
            <FlatList>{number}</FlatList>
        });

        console.log("THIS SHOULD BE CALLED IN RENDER: " + this.state.alternatives);
        if (this.state.alternatives) {
            for (var i = 0; i < this.state.alternatives.length; i++) {
                var currentAlternative = this.state.alternatives[i];
                console.log(currentAlternative["price"]);
            }
        }

        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.containerView}>
                    <View style={styles.headerView}>
                        <View style={styles.searchBarView}>
                            <Icon style={styles.searchIconStyle}name="ios-search" size={24} />
                            <TextInput 
                                style={styles.textInput}
                                placeholder="Try $12.50"
                                placeholderTextColor="grey"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
                            <View style={styles.resultsView}>
                                <li>{listItems}</li>

                                <ResultCard 
                                    type="ahhh"
                                    category="alcohol"
                                    width={width}
                                    rating={4.5}
                                    uploader="Jenn"
                                    saves={12}
                                />
                                <ResultCard 
                                    type="One ticket to Cineplex"
                                    category="tickets"
                                    width={width}
                                    rating={4.5}
                                    uploader="Kiara"
                                    saves={129}
                                />
                                <ResultCard 
                                    type="Over one month of Spotify Premium"
                                    category="music"
                                    price="2sdf4"
                                    width={width}
                                    rating={5}
                                    uploader="Kevin"
                                    saves={44}
                                />
                                <ResultCard 
                                    type="12 packs of delicious Samyang Ramen"
                                    category="food"
                                    price="2sdf4"
                                    width={width}
                                    rating={5}
                                    uploader="Jason"
                                    saves={34}
                                />
                                <ResultCard 
                                    type="1/3 of a UBC Fitness Centre semester long membership"
                                    category="exercise"
                                    price="24"
                                    width={width}
                                    uploader="Janelle"
                                    saves={9}
                                />
                                <ResultCard 
                                    type="One month of Netflix"
                                    category="movies"
                                    price="2sdf4"
                                    width={width}
                                    rating={5}
                                    uploader="Kevin"
                                    saves={231}

                                />
                                <ResultCard 
                                    type="Gold's gym membership for one month"
                                    category="exercise"
                                    price="24"
                                    width={width}
                                    uploader="Tom"
                                    saves={56}
                                />
                                <ResultCard 
                                    type="Buy a Big Mac for someone in need"
                                    category="food"
                                    width={width}
                                    uploader="Lin"
                                />
                                <ResultCard 
                                    type="A 4 hour cooking lesson at Spiklers Kitchen"
                                    category="food"
                                    price="2sdf4"
                                    width={width}
                                    uploader="Teresa"
                                />
                                <ResultCard 
                                    type="One month subscription of Spotify"
                                    category="Music"
                                    price="24"
                                    width={width}
                                    uploader="Brianna"
                                />
                                <ResultCard 
                                    type="Gold's gym membership for one month"
                                    category="Exercise"
                                    price="24"
                                    width={width}
                                />
                            </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    containerView: {
        flex: 1
    },
    headerView: {
        height: 80,
        backgroundColor: 'white',
    },
    searchBarView: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    textInput: {
        flex: 1,
        fontWeight: '700',
        fontSize: 20,
        backgroundColor: 'white',
        paddingLeft: 10
    },
    searchIconStyle: {
        marginTop: 1
    },
    resultsExplanationText: {
        ...iOSUIKit.footnote,
        fontSize: 20,
        padding: 20
    },
    resultsView: {
        paddingHorizontal: 10,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    scrollViewContainer: {
        marginHorizontal: 10
    },

});

const colors = {
    red: 'rgba(252, 92, 101, 0.8)',
    darkRed: 'rgba(236, 59, 90, 0.5)',
    orange: 'rgba(253, 150, 67, 0.8)',
    darkOrange: 'rgba(250, 130, 49, 0.5)',
    yellow: 'rgba(254, 211, 48, 0.8)',
    darkYellow: 'rgba(247, 183, 49, 0.5)',
    green: 'rgba(38, 222, 129, 0.1)',
    darkGreen: 'rgba(32, 191, 107, 0.1)',
    teel: 'rgba(43, 203,1 86, 0.1)',
    darkTeel: 'rgba(17, 185, 177, 0.1)',
    blue: 'rgba(69, 170, 242, 0.8)',
    darkBlue: 'rgba(45, 152, 219, 0.1)',
    purpley: 'rgba(75, 123, 236, 0.05)',
    darkPurpley: 'rgba(56, 103, 214, 0.1)',
    purple: 'rgba(166, 94, 234, 0.05)',
    darkPurple: 'rgba(136, 85, 208, 0.1)',
    grey: 'rgba(209, 216, 224, 0.1)',
    darkGrey: 'rgba(165, 177, 194, 0.1)'

}