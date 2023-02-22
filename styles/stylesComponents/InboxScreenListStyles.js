import fonts from '../utils/mixins';
import variables from '../utils/variables';
import { ScreenSettings } from '../utils/ScreenSettings';

export const InboxScreenListStyles = {

container: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 40,
maginBottom:20,
marginLeft: 30
},
listContainer: {
borderColor: "#fff",
borderWidth: 1
    },
Image: {
zIndex: 100,
width: 60,
height: 60,
borderRadius: 50,
    },

title: {
    marginLeft: 10,
    ...fonts(16, "500"),
    color: variables.titleColor
    
    },
    lastMessage: {
    marginLeft: 10,
    ...fonts(12, "500"),
    color: variables.titleColor
    }
};

