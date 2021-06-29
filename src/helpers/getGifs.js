export const getGifs = async( categoria ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=4&api_key=kwKIyg9uS0QiTzfoXeIqI61b4tQVVgER`;
        const repuesta = await fetch( url );
        //deconstruimos el resultado y solo obtenemos el data, obviando asi la paginacion y demas datos en el resultado
        const { data } = await repuesta.json();
        //creamos un objeto solo con la informacion que nos interesa, para que se amas facil de leer
        const gifs = data.map( img => {
            return { id: img.id, title: img.title, url: img.images.downsized_medium.url }
        })
        console.log(gifs);
        return gifs;
    }
