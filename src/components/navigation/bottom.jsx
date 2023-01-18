import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**Screens */
import MiPerfil from '../../screens/perfil';
import Tickets from '../../screens/tickets';
import Homes from '../../screens/home';
import Franquicias from '../../screens/franquicias';
/** */
import BoxBottom from './boxBottom';
import { GoBack, Shopping, Setting } from '../headers';

const BarBottom = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBar={props => <BoxBottom {...props} />}
        >
            <Tab.Screen name='Homes' component={Homes} options={{
                headerTitle: 'Peliculas',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'rgba(46, 19, 113,1)' },
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerShadowVisible: false,
            

            }} />
            <Tab.Screen name='franquicia' component={Franquicias} options={{
                headerTitle: 'Franquicias',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'rgba(46, 19, 113,1)' },
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerShadowVisible: false,
            }} />
            <Tab.Screen name='tickets' component={Tickets} options={{
                headerTitle: 'Tiquetes',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerShadowVisible: false,
                headerTransparent: true,
                headerRight: () => (<Shopping />)
            }} />
            <Tab.Screen name='miPerfil' component={MiPerfil} options={({ route }) => ({
                headerTitle: '',
                headerShadowVisible: false,
                headerTransparent: true,
                headerRight: () => (<Setting />)

            })} />

        </Tab.Navigator>
    );
}

export default BarBottom