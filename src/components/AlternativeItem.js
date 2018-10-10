import React, { Component } from 'react';

class AlternativeItem extends Component {
    render() {
        return (
            <View>
                <Text> {this.props.alternative.price} </Text>
            </View>
        );
    }
}

export default AlternativeItem;