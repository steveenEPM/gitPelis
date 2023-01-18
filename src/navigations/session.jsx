import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts } from 'expo-font';
/**Screens */
import InforPelis from "../screens/infoPelis";
import Puestos from '../screens/puestos';
import BarBottom from '../components/navigation/bottom';
/**Componentes */
import { GoBack, Shopping ,Setting} from '../components/headers';
/** */
import { jsonFonts } from '../hooks/fonts';
import { forFade,forSlide } from './animations/interpolator';



export default function Session() {

   const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName='barBottom'
        
        >
            <Stack.Screen name='infoPeli' component={InforPelis} options={({ route }) => ({
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (<GoBack />),
                headerShadowVisible: false,
                animation:"slide_from_right"
            })} />
           
            <Stack.Screen name='puestos' component={Puestos} options={{
                headerTitle: 'Seleccion silla',
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'PlayfairDisplay-Bold', fontSize: 12 },
                headerStyle: { backgroundColor: 'rgba(46, 19, 113,1)' },
                headerShadowVisible: false,
                headerLeft: () => (<GoBack />),
                headerRight: () => (<Shopping />),
                animation:"fade"
            }} />
            <Stack.Screen name="barBottom" component={BarBottom} options={{
                headerShown:false
            }}/>
           
        </Stack.Navigator>
    )
}
