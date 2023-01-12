import { View, Text, Pressable, Image, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styleSheet } from "../../../styles/styles";


export default function ListHome({ etiquiteta, lista }) {

    const navigation = useNavigation()

    const onPress = (names)=>{
        navigation.navigate('infoPeli',{names})
    }

    return (
        <View style={{ marginBottom: '5%' }}>
            <Text style={[styleSheet.Texts, { marginLeft: '3%', marginBottom: '2%', color: 'white', fontFamily: 'PlayfairDisplay-Bold' }]}>
                {etiquiteta}
            </Text>

            <FlatList
                data={lista}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: '4%' }}
                decelerationRate={0}
                snapToInterval={size + 10}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            style={({ pressed }) => [{ borderRadius: 20, marginRight: 12 }, pressed && { backgroundColor: 'rgba(0,0,0,.5)' }]}
                            onPress={()=> onPress(item.nombre)}
                        >
                            <Image source={item.uri} style={{
                                width: size,
                                height: size + 50,
                                borderRadius: 10,
                                borderColor: 'rgba(255,255,255,0.5)',
                                borderWidth: 2
                            }} />
                        </Pressable>
                    )
                }}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('window')

const size = height * 0.23