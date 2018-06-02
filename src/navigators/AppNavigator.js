/**
 * @flow
 */
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FlexDirectionBasics from '../screens/FlexDirectionBasics';
import FlexWrapBasics from '../screens/FlexWrapBasics';
import JustifyContentBasics from '../screens/JustifyContentBasics';
import AlignContentBasics from '../screens/AlignContentBasics';
import AlignItemsBasics from '../screens/AlignItemsBasics';
import FlexBasics from '../screens/FlexBasics';
import FlexBasics2 from '../screens/FlexBasics';
import FlexAdvanced from '../screens/FlexAdvanced';
import AlignSelfBasics from '../screens/AlignSelfBasics';
import ViewBasics from '../screens/ViewBasics';
import TextBasics from '../screens/TextBasics';
import TextInputBasics from '../screens/TextInputBasics';
import TouchableBasics from '../screens/TouchableBasics';
import ScrollViewBasics from '../screens/ScrollViewBasics';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Samples',
      },
    },
    FlexDirectionBasics: {
      screen: FlexDirectionBasics,
      navigationOptions: {
        headerTitle: 'FlexDirectionBasics',
      },
    },
    FlexWrapBasics: {
      screen: FlexWrapBasics,
      navigationOptions: {
        headerTitle: 'FlexWrapBasics',
      },
    },
    JustifyContentBasics: {
      screen: JustifyContentBasics,
      navigationOptions: {
        headerTitle: 'JustifyContentBasics',
      },
    },
    AlignContentBasics: {
      screen: AlignContentBasics,
      navigationOptions: {
        headerTitle: 'AlignContentBasics',
      },
    },
    AlignItemsBasics: {
      screen: AlignItemsBasics,
      navigationOptions: {
        headerTitle: 'AlignItemsBasics',
      },
    },
    FlexBasics: {
      screen: FlexBasics,
      navigationOptions: {
        headerTitle: 'FlexBasics',
      },
    },
    FlexBasics2: {
      screen: FlexBasics2,
      navigationOptions: {
        headerTitle: 'FlexBasics2',
      },
    },
    FlexAdvanced: {
      screen: FlexAdvanced,
      navigationOptions: {
        headerTitle: 'FlexAdvanced',
      },
    },
    AlignSelfBasics: {
      screen: AlignSelfBasics,
      navigationOptions: {
        headerTitle: 'AlignSelfBasics',
      },
    },
    ViewBasics: {
      screen: ViewBasics,
      navigationOptions: {
        headerTitle: 'ViewBasics',
      },
    },
    TextBasics: {
      screen: TextBasics,
      navigationOptions: {
        headerTitle: 'TextBasics',
      },
    },
    TextInputBasics: {
      screen: TextInputBasics,
      navigationOptions: {
        headerTitle: 'TextInputBasics',
      },
    },
    TouchableBasics: {
      screen: TouchableBasics,
      navigationOptions: {
        headerTitle: 'TouchableBasics',
      },
    },
    ScrollViewBasics: {
      screen: ScrollViewBasics,
      navigationOptions: {
        headerTitle: 'ScrollViewBasics',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
