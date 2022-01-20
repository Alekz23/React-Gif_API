import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({ data: [], loading: true });

    useEffect(() => {
        GetGifs(category).then((imgs) => {

            setTimeout(() => {
                console.log(imgs);
                setstate({ data: imgs, loading: false });
            }, 3000);
        });
    }, [category]);

    return state;
};
