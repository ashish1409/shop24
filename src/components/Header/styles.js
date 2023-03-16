import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:colors.lemonYellow
  },
  title: {
    fontSize: 16,
    color: colors.purple,
    fontWeight: '700',
    
  },
  icon: {
    width: 24,
    height: 24,
  },
  logout:{
    color: colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
  logo:{
    resizeMode: 'contain',
    height: 26,
    width: 100,
   flexDirection:'row',
  }
});

export default styles;
