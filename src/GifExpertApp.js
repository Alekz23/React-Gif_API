import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
    
    const initialState = ["one punch"];

    const [category, setcategory] = useState(initialState);

    const AgregarCategory = () => {
        const changeCategory = [...category, "sharingan"];
        setcategory(changeCategory);
        //otra manera
        //setcategory(cats=>[...cats, 'new element'])
    };

    return (
        <div>
            <h1>Gif Expert</h1>
            <AddCategory setcategory={setcategory}></AddCategory>
            <ol>
                {/* {
                category.map((category) => {
                    return <li key={category}> {category} </li>;
                })
                } */}
                {
                    category.map((category) =>{
                        return <GifGrid  key={category} category={category} />
                    })
                }
            </ol>

            <button onClick={AgregarCategory}>Agregar</button>
        </div>
    );
}
