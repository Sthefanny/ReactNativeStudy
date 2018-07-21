import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/util';

export default createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const personName = capitalizeFirstLetter(navigation.state.params.person.name.first);
      return ({
        title: personName
      });
    }
  }
},
  {
    navigationOptions: {
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
        height: 50
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center'
      }
    }
  });
