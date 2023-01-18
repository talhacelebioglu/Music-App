import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.styles';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ne aramak istiyorsun?" onChangeText={onSearch} />
    </View>
  );
};

export default SearchBar;
