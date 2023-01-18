import {  Text,   View } from "react-native";
import { AntDesign } from 'react-native-vector-icons'

import { styleSheet } from "../../styles/styles"

const Estrella = ({estrella}) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 ,}}>
            <View style={{ flexDirection: 'row', marginRight: '5%' }}>
                {
                    [1, 2, 3, 4].map((key, index) => {
                        return (
                            <View key={index}>
                                <AntDesign name="star" size={15} color="rgb(255, 242, 125)" />
                            </View>
                        )
                    })
                }
            </View>
            <Text style={[styleSheet.Texts]}>{estrella}</Text>
        </View>
    )
}

export default  Estrella