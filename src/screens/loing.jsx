import { View, StyleSheet,Dimensions} from "react-native"

import { Vista } from "../components/components"
import Formulario from "../containers/auth/loing/formulario"


export default function SingIng (){

    return (
        <Vista styles={styles.container}>
            <View style={{height:height*0.8,backgroundColor:'rgb(46, 19, 113)',borderBottomLeftRadius:radio,borderBottomRightRadius:radio}}/>
            <View style={{backgroundColor:'white'}}/>
            <Formulario/>
        </Vista>
    )

}

const radio = 100
const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    }
})