
import { useEffect } from "react";
import { useState } from "react";


const Blocs = () => {
    const [blogs ,setBlogs] = useState([]);
    useEffect(()=> {
        fetch('block.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blocs;