import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";

import { Vista } from "../components/components";
import Contenedor from "../containers/session/franquicias/container";
import Ventana from "../containers/session/franquicias/ventana";
import { cines } from "../utils/databases/franquicia";


export default function Franquicias(){

    const [items,setItems] = useState(undefined)

    const[visible,setVisible] = useState(false)

    const onPress = (element)=>{
        setItems(element)
        setVisible(true)
    }
    
    return(
        <Vista>
            <FlatList
                data={cines}
                renderItem={({item,index})=>{
                    return (
                        <Contenedor items={item} onPress={onPress}/>
                    )
                }}
            />
            <Ventana visible={visible} setVisible={setVisible} items={items}/>
        </Vista>
    )
}