import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';
/**Screens */
import InforPelis from "../screens/infoPelis";
import Puestos from '../screens/puestos';
import Tickets from '../screens/tickets';
import Homes from '../screens/home';
import Franquicias from '../screens/franquicias';
/**Componentes */
import { GoBack, Shopping } from '../components/headers';
/** */
import { jsonFonts } from '../hooks/fonts';



export default function Session() {

    const Stack = createNativeStackNavigator()


    const [fontsLoaded] = useFonts(jsonFonts);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <Stack.Navigator initialRouteName='franquicia'>
            <Stack.Screen name='infoPeli' component={InforPelis} options={({ route }) => ({
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (<GoBack />),
                headerShadowVisible: false,

            })} />
            <Stack.Screen name='puestos' component={Puestos} options={{
                headerTitle: 'Seleccion silla',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerStyle: { backgroundColor: 'rgba(46, 19, 113,1)' },
                headerShadowVisible: false,
                headerLeft: () => (<GoBack />),
                headerRight: () => (<Shopping />)
            }} />
            <Stack.Screen name='tickets' component={Tickets} options={{
                headerTitle: 'Tiquetes',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerShadowVisible: false,
                headerTransparent: true,
                headerLeft: () => (<GoBack />),
                headerRight: () => (<Shopping />)
            }} />
            <Stack.Screen name='Homes' component={Homes} options={{
                headerTitle: 'Peliculas',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'rgba(46, 19, 113,1)' },
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerShadowVisible: false,

            }} />
            <Stack.Screen name='franquicia' component={Franquicias} options={{
                headerTitle: 'Franquicias',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'rgba(46, 19, 113,1)' },
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerShadowVisible: false,

            }} />
        </Stack.Navigator>
    )
}