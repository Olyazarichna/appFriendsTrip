import fonts from '../utils/mixins';
import variables from '../utils/variables';
import { ScreenSettings } from '../utils/ScreenSettings';

export const GalleryProfileComponentsStyles = {
closeButton: {
    position: "absolute",
    top: 0,
    left: 25,  
    },
galleryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    },
buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 10   
    },
buttonTitleFind: {
    color: variables.labelButtonBlue,
    marginLeft: ScreenSettings.returnParams(10, 15),
    marginTop: ScreenSettings.returnParams(0, 5),
    marginRight: "auto",
    ...fonts(ScreenSettings.returnParams(14, 18), "500")   
    },
buttonTitleAdd: {
    color: variables.labelButtonBlue,
    marginLeft: ScreenSettings.returnParams("auto", 15),
    marginTop: ScreenSettings.returnParams(0, 5),
    marginRight: "auto",
    ...fonts(ScreenSettings.returnParams(14, 18), "500")
},
addAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: variables.labelButtonWhite,
  },
  avatarContainer: {
    width: ScreenSettings.returnParams(150, 250),
    height: ScreenSettings.returnParams(150, 250),
    backgroundColor: "#E3E5E8",
    borderRadius: 120,
    },
}