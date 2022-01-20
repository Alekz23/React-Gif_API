import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {

    // const [images, setimages] = useState([]);


    // si la categoria cambia, vuelve a hacer la peticion http
    // useEffect(() => {
    //     GetGifs(category)
    //             .then(imgs=> setimages(imgs))
    // }, [category]);


    //data: images --- el segundo atributo cambia el name
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h1>{category}</h1>
            {loading && <p>loading</p>}
            <div className="card-grid">


                {images.map((img) => (
                    <GifGridItem key={img.id} {...img}></GifGridItem>
                ))}
            </div>
        </>
    );
}
