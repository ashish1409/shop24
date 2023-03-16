import {StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0 ,
  },
  prodList: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  prodListText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.darkBlue,
  },
  prodContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  prodImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  prodName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor:'white'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
    color: colors.blue,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:  'column' 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.darkBlue,
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
});

export default styles;
