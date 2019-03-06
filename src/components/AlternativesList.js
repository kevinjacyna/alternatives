import React, { Component } from 'react';
import { FlatList } from 'react-native';

import AlternativeItem from './AlternativeItem';

class AlternativesList extends Component {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(alternative) {
      return (
          <AlternativeItem alternative={alternative} />
      );
    }

    render() {
        console.log(this.props.alternatives);
        return(
            <FlatList
                data={this.props.alternatives}
                searchPrice={this.props.searchPrice}
                renderItem={this.renderItem}
                keyExtractor={(alternative, index) => alternative.id + String(index)}
                numColumns={2}
            />
        );
    }
}

export default AlternativesList;
