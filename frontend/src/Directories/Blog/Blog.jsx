import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../../Components/Navbar';
import Headroom from 'react-headroom';
import Footer from '../../Components/Footer';
import BlogCard from '../../Components/BlogCard';
import axiosinstance from '../../utils/axiosinstance';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                const response = await axiosinstance.get('/get-all-blogs');
                if (response.data && response.data.blogs) {
                    setAllBlogs(response.data.blogs);
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    }, 100);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getAllBlogs();
    }, []);

   

    return (
        <>
            <Headroom>
                <Navbar />
            </Headroom>
            <div className="min-h-[100vh] text-center">
                <h1 className="text-6xl underline">Blogs</h1>
                <div className="Blogs w-5/6 my-12 mx-auto py-6 px-3 flex justify-around items-center flex-wrap gap-9">
                    {allBlogs &&
                        allBlogs.map((blog, index) => (
                            <div className="card" key={index}>
                                <BlogCard blog={blog} />
                            </div>
                        )).reverse()}
                </div>
            </div> 
            <Footer />
        </>
    );
};

export default Blog;
