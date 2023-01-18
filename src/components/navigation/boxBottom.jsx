import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Foundation, FontAwesome5, FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons'

const BoxBottom = ({ state, descriptors, navigation }) => {
    return (
        <View style={[styles.container]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={({pressed})=>[styles.Pressable]}
                        key={index}
                        android_ripple={{color:'rgba(255,255,255,.5)'}}
                        unstable_pressDelay={300}
                    >

                        <View style={[isFocused && styles.focus]}>
                            {
                                label === 'Homes' && <Foundation name="home" size={size} color={focus} />
                            }
                            {
                                label === 'franquicia' && <FontAwesome5 name="map-marker-alt" size={size} color={focus} />
                            }
                            {
                                label === 'tickets' && <MaterialCommunityIcons name="ticket-confirmation" size={size} color={focus} />
                            }
                            {
                                label === 'miPerfil' && <FontAwesome name="user" size={size} color={focus} />
                            }
                        </View>

                    </Pressable>
                );
            })}
        </View>
    );
}

/*
<Text style={{ color: isFocused ? 'white' : '#222' }}>
{label}
</Text>
*/export default BoxBottom

const { width, height } = Dimensions.get('window')

const size = 20, focus = "white", blur = "blue"

const circle = 40

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        height: height * 0.1,
        maxHeight: 68,
        backgroundColor: '#4D2DAD'
    },
    Pressable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    focus: {
        width: circle+5,
        height: circle+5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 95,
        backgroundColor:'rgba(182, 17, 107,1)',
 

    }

})