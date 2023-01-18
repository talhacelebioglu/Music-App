import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  inner_container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  info_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  artist: {
    color: 'white',
    opacity: 0.5,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.8,
    marginLeft: 15,
    color: 'orange',
  },
});
