import fonts from '../utils/mixins';
import variables from '../utils/variables';
import { ScreenSettings } from '../utils/ScreenSettings';

export const MessagesStyles = {
    conteiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-start',      
    },
    header: {
    width: "100%",
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    },
   Image: {
   zIndex: 100,
   width: 60,
   height: 60,
   borderRadius: 50,
   marginLeft: 20,
    },
    nameTitle: {
    marginLeft: 10,
    ...fonts(16, "500"),
    color: variables.labelButtonWhite   
    },
    
    buttonClose: {
        position: "absolute",
        right: 30,
        padding: 5,
        borderColor: variables.labelButtonWhite,
        borderRadius: 50,
        borderWidth: 2,
        

    },

  
   
    footer: {
        width: "100%",
         position: "absolute",
        height: 70,
        bottom: 0,
        left: 0 
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: ScreenSettings.returnParams(20, 40),
        marginBottom: ScreenSettings.returnParams(10, 15),
    },

    input: {
    width: 330,
    
    
    borderWidth: 1,
    borderColor: variables.labelButtonWhite,
    height: ScreenSettings.returnParams(40, 80),
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(249, 250, 251, 1)',
    ...fonts(ScreenSettings.returnParams(14, 18), '500'),
    color: variables.inputColor,
  },   
}