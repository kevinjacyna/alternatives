import React, { Component } from 'react';
import { FlatList } from 'react-native';

import AlternativeItem from './AlternativeItem';

class AlternativesList extends Component {

    renderItem(alternative) {
        return <AlternativeItem alternative={alternative} />;
    }

    render() {
        return(
            <FlatList
                data={this.props.alternatives}
                renderItem={this.renderItem}
                keyExtractor={(alternative) => alternative.id}
            />
        );  
    }
}

export default AlternativesList;