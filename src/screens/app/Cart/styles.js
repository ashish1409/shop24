import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title:{
    fontSize:24,
    marginTop :20,
    marginBottom:20,
    color:colors.darkBlue,
    fontWeight:700,
    textAlign:'center'
   
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    shadowColor: colors.lemonYellow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: colors.darkBlue,
    marginBottom: 10,
    borderRadius:10,
    marginHorizontal:10,
    alignItems:"center"
    
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 25,
    
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
    
  },
  name: {
    fontSize: 16,
    color:colors.white,
    fontWeight:700
  },
  price: {
    fontSize: 16,
    color:colors.white,
  },
  removeButton: {
    alignItems: 'center',
    color:colors.white,
   
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color:colors.white,
    backgroundColor:colors.darkBlue
  },
  quantity: {
    paddingHorizontal:10,
    color:colors.white,
  },
  ButtonCustom:{
    width:"100%",
    height:56,
    backgroundColor:colors.lemonYellow,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0

  },
  ButtonCustomText:{
 fontSize:24,
 color:colors.darkBlue,

  }
});

export default styles;
