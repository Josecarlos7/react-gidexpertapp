import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) => {
   const [state, setState] = useState({
       data:[],
       loading:true
   });
    //use efect hace que esta funcion solo se ejecute una vez cuando el componente es renderizado y no cada que detecte cambios en este componente
   useEffect( () => {
       getGifs ( categoria )
        .then( imgs => {
            //setTimeout(() => {
                setState({
                    data:imgs,
                    loading:false
                });
            //}, 3000);
        });
   }, [ categoria ]);
   return state;
}
export default useFetchGifs;