import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.darkBlue,
  },
  footerText: {
    color: colors.grey,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 28,
  },
  footerLink: {
    color: colors.white,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  agreeText: {
    color: colors.grey,
    fontSize: 12,
    marginLeft: 8,
  },
  link: {
    textDecorationLine: 'underline',
  },
  customInput:{
    borderColor: colors.white,
    color: colors.grey,
    backgroundColor: colors.white,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical:8
  }
});

export default styles;
