import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIng from "../screens/loing";

export default function Auth(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="singIng" component={SingIng} />
        </Stack.Navigator>
    )
}