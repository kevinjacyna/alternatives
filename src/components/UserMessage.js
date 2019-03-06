import React, { Component } from 'react';

class UserMessage extends Component {
    render() {

      return (
          <View style={{ width: width / 2 - 40, height: width * 0.7,
              borderWidth: 1.0, borderColor: '#dddddd', marginBottom: 18, borderRadius: 5, alignSelf: 'flex-start', backgroundColor: iOSColors.white, marginRight: 20 }}>
              <View style={styles.title}>
                  <Text style={styles.titleText}>{alternative["title"]}</Text>
              </View>
          </View>
      );
    }
}

export default UserMessage;
