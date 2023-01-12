
import { View, Image, Dimensions, Pressable ,Modal} from "react-native";

export default function QrCode({ visible, setVisible }) {

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setVisible(false)}
        >
            <Pressable style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,.2)'}}
                onPress={()=>setVisible(false)}
            >
                <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' , borderRadius:20}}>
                    <Image source={require('../../../../assets/imagenes/qr.png')}
                        style={{
                            width: size,
                            height: width,
                            
                        }}
                    />
                </View>
            </Pressable>

        </Modal>
    )

}





const { width, height } = Dimensions.get('window')

const size = width * 0.90
