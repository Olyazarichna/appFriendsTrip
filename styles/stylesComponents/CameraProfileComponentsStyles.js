import fonts from '../utils/mixins';
import variables from '../utils/variables';
import { ScreenSettings } from '../utils/ScreenSettings';

export const CameraProfileComponentsStyles = {
    closeButton: {
    position: "absolute",
    top: 0,
    left: 25
    },
    addAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: variables.labelButtonWhite,
  },
  camera: {
    width: '90%',
    height: ScreenSettings.returnParams(300, 600)
  
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
}
