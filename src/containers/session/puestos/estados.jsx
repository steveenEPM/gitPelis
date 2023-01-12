import {View,Text,Dimensions} from 'react-native'
import { useFonts } from 'expo-font'

import { jsonFonts } from '../../../hooks/fonts'

export default function Estados(){

    const size = width *0.03

    const maxSize = 17

    const [fontsLoaded] = useFonts(jsonFonts);

    if (!fontsLoaded) {
        return null;
    }


    /** */
    const Components = ({color,label})=>{
        return (
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:'1%'}}>
                <View style={{backgroundColor:color, borderRadius:160, width:size, height:size, maxWidth:maxSize, maxHeight:maxSize}}/>
                <Text style={{fontSize:11, color:'white',fontFamily:'PlayfairDisplay-Medium',marginLeft:'7%',textTransform:'capitalize'}}>{label}</Text>
            </View>
        )
    }

    return(
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Components color={'rgba(255,255,255,1)'} label={'disponible'}/>
            <Components color={'rgba(182, 17, 107,1)'} label={'reservado'}/>
            <Components color={'rgba(9, 251, 211,1)'} label={'selecciónado'}/>
        </View>
    )

}



const {width} = Dimensions.get('window')