import { useEffect, useState } from "react";


const Blogs = () => {

    const [bolgs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <h3></h3>
        </div>
    );
};

export default Blogs;