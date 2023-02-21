import fonts from '../utils/mixins';
import variables from '../utils/variables';
import { ScreenSettings } from '../utils/ScreenSettings';

export const MessageElStyles = {
    conteinerMy: {
    width: "95%",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: variables.labelButtonBlue,
    
    },
    conteinerYou: {
    width: "95%",
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 20,
    backgroundColor: variables.titleColor,
    
    },
    massage: {
    ...fonts(14, "500"),
      color: variables.labelButtonWhite  
    },
    data: {
    ...fonts(12, "500"),
        color: variables.labelButtonWhite,
        marginTop: 5,
    },



}