import { FlatList } from "react-native-gesture-handler";

import { Vista } from "../components/components";
import Contenedor from "../containers/session/franquicias/container";
import { cines } from "../utils/databases/franquicia";


export default function Franquicias(){
    
    return(
        <Vista>
            <FlatList
                data={cines}
                renderItem={({item,index})=>{
                    return (
                        <Contenedor items={item}/>
                    )
                }}
            />
        </Vista>
    )
}