import {StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal:10,
    marginVertical:10,
    height: 60,
    width: 70,
  },
  logo: {
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: colors.darkBlue, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, 
    shadowRadius: 2,
  },
  searchContainer: {
    width:'100%',
    padding: 16,
  },
  searchInput: {
    height:50,
    backgroundColor: colors.white,
    borderColor: colors.lemonYellow,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 14,
    padding: 8,
  },
  name: {
    fontSize: 12,
    color:colors.darkBlue,
    textAlign:'center',
  },
  imageBaner:{
    width:'100%',
    height:100,
  }
});

export default styles;
