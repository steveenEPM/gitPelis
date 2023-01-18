import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Entypo ,Ionicons} from 'react-native-vector-icons'

export const GoBack = () => {

    const navigation = useNavigation()

    return (
        <Pressable style={ ({pressed}) => [styles.Pressable]} onPress={() => navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={15} color="white" />
        </Pressable>
    )
}

export const Shopping = () => {
    const navigation = useNavigation()

    return (
        <Pressable style={styles.Pressable} onPress={() => navigation.goBack()}>
            <Entypo name="shopping-bag" size={15} color="white" />
        </Pressable>
    )

}

export const Setting = ()=>{
    return(
        <Pressable style={({pressed})=>[{padding:9},pressed && {backgroundColor:'rgba(255,255,255,0.3)',borderRadius:70}]}>
            <Ionicons name="settings-sharp" color="white" size={30}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    Pressable: {
        backgroundColor: 'rgba(19, 11, 43,.9)',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 50,
    }
})