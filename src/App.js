import {View, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import music_data from './music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

export default function App() {
  const [data, setData] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;

  const handleSearch = text => {
    const filteredData = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setData(filteredData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderSong}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
