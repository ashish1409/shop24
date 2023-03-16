import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
    height:'100%'
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.darkBlue,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight:32
  },
  title2: {
    color: colors.lemonYellow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight:32
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: colors.darkBlue,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default styles;
