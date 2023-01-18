import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { Vista } from '../components/components'
import { styleSheet } from '../styles/styles'
import usuario from '../../assets/imagenes/usuario.jpeg'

export default function MiPerfil() {
    return (
        <Vista>
            <ImageBackground source={usuario} style={{ flex: 1 ,justifyContent:'flex-end'}}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={[ 'transparent','rgba(46, 19, 113,0.6)','rgba(46, 19, 113,0.8)','rgb(46, 19, 113)',]}
                    style={styles.gradiant}
                 
                >
                    <Text style={{fontFamily:'PlayfairDisplay-Bold',fontSize:20,color:'white'}}>Sara961</Text>
                    <View style={{flexDirection:'row', marginTop:'3%',alignItems:'center'}}>
                        <Text style={[styleSheet.Texts,styles.text]}>portoviejo</Text>
                        <View style={{width:2, height:22,backgroundColor:'white',borderRadius:30,marginHorizontal:7}}/>
                        <Text style={[styleSheet.Texts,styles.text]}>manabi</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Vista>
    )
}
const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    gradiant:{
        alignItems:'center',
        justifyContent:'center',
        height:height*0.3
    },
    text:{
        color:'white',
        textTransform:'capitalize'
    }
})