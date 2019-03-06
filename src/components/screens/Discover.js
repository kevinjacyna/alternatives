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
import AltenativesList from '../AlternativesList';
import AlternativesList from '../AlternativesList';

const { height, width } = Dimensions.get('window');

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', searchPrice: '', alternatives: []};
        this.handleInput = this.handleInput.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.compare = this.compare.bind(this);
        this.doesContainMoreThanOneDot = this.doesContainMoreThanOneDot.bind(this);
        this.deleteExtraDots = this.deleteExtraDots.bind(this);
        this.removeCharAtIndex = this.removeCharAtIndex.bind(this);
    }

    componentWillMount() {
        this.getData()
    };

    handleTextChange(text) {
      this.setState({text}, () => {
        let trimmedString = this.deleteExtraDots(text);
        console.log(text);
        console.log(trimmedString);
        this.setState({text: trimmedString});
      });

      // if (this.doesContainMoreThanOneDot(text)) {
      //   let trimmedString = this.deleteExtraDots(text);
      //   console.log("Trimmed string: " + trimmedString);
      //   this.setState({text: trimmedString});
    }

    doesContainMoreThanOneDot(str) {
      let dotCount = 0;
      if (str != null && str.length != 0) {
        for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) == ".") {
              dotCount += 1;
              if (dotCount >= 2) {
                return true;
              }
            }
          }
        }
        return false;
      }

    handleInput(input) {
        let userInput = input.nativeEvent.text;
        this.setState({searchPrice: userInput}, () => {
        })
        console.log("Handle input called");
        this.scroller.scrollTo({x:0, y: 0, animated: false});
    };

    deleteExtraDots(str) {
      let haveSeenDot = false;
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ".") {
          if (haveSeenDot) {
            str = this.removeCharAtIndex(str, i);
          }else {
            haveSeenDot = true;
          }
        }
      }
      return str;
    }

    removeCharAtIndex(str, index) {
      if (index > str.length - 1) {
        return str;
      }
      return str.substr(0, index) + str.substr(index + 1);
  }

    getData = () => {
      this.setState({searchPrice: 50});
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
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            var price = childData["price"];
            alternativesList.push(childData);
            alternativesList.sort(this.compare);
            console.log(price);
            this.setState({ alternatives: alternativesList });
            this.state.alternatives.sort(this.compare);
        });
      });
    }

    compare(a, b) {
      if (a["price"] <= b["price"]) {
        return 1;
      }else if (a["price"] > b["price"]) {
        return -1;
      }else {
        return 0;
      }
    }

    render() {
      console.log("Rendering")
      console.log(this.state.alternatives.length);
      let filteredAlternatives = this.state.alternatives.filter((alternative) => {
        let price = this.state.searchPrice ? this.state.searchPrice : 99999999;
        return alternative["price"] < this.state.searchPrice;
      });
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.containerView}>
                    <View style={styles.headerView}>
                        <View style={styles.searchBarView}>
                            <Icon style={styles.searchIconStyle}name="ios-search" size={25} />
                            <TextInput
                                style={styles.exampleSearch}
                                clearTextOnFocus={true}
                                placeholder="Try $12.50"
                                placeholderTextColor="grey"
                                underlineColorAndroid="transparent"
                                keyboardType="decimal-pad"
                                returnKeyType='done'
                                onChangeText={this.handleTextChange}
                                value={this.state.text}
                                onSubmitEditing={this.handleInput}
                            />
                        </View>
                    </View>
                    <ScrollView style={styles.scrollViewContainer} ref={(scroller) => {this.scroller = scroller}}
                    showsVerticalScrollIndicator={false} >
                            <View style={styles.resultsView}>
                                <AlternativesList alternatives={filteredAlternatives} searchPrice={this.state.searchPrice}/>
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
        flex: 1,
        flexDirection:'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'white'
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
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    exampleSearch: {
        flex: 1,
        fontWeight: '700',
        fontSize: 20,
        backgroundColor: 'white',
        paddingLeft: 10
    },
    searchIconStyle: {
        marginTop: 1,
        color: 'grey'
    },
    resultsView: {
        paddingHorizontal: 10,
        marginTop: 15,
        flexDirection:'column',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    scrollViewContainer: {
        marginHorizontal: 20
    },
});
