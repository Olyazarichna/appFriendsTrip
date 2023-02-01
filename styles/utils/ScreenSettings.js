import { Dimensions} from 'react-native';

export const ScreenSettings = {

    widthScreen: Dimensions.get('window').width,
    
  
    returnParams(phone, tablet) {
    
      if (this.widthScreen < 500) {
          return phone;  
        };  
      if  (500 < this.widthScreen) 
      {
        return tablet;
    };   
}

}