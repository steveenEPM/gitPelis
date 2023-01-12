import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StatusBar, View, Image } from "react-native";


export const Vista = ({ styles, children }) => {


    return (
        <SafeAreaProvider>
            <SafeAreaView style={[{ flex: 1, backgroundColor: 'rgb(46, 19, 113)' }, styles]}>
                {children}
            </SafeAreaView>
            <StatusBar backgroundColor='rgb(46, 19, 113)' barStyle='light-content' />
        </SafeAreaProvider>
    )
}

export const VistaHidden = ({ styles, children }) => {


    return (
        <View style={[{ flex: 1, backgroundColor: 'rgb(46, 19, 113)' }, styles]}>
            {children}

            <StatusBar barStyle='light-content' backgroundColor="transparent" translucent={true} />
        </View>
    )
}


export const Loading = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/imagenes/Ellipsis-1s-200px.gif')} style={{
                width: size,
                height: size + 1
            }} />
        </View>
    )

}


const { width, height } = Dimensions.get('window')

const size = height * 0.1