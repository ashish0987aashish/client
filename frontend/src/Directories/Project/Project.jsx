import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../../Components/Navbar';
import Headroom from 'react-headroom';
import Footer from '../../Components/Footer';
import ProjectCard from '../../Components/ProjectCard';
import axiosinstance from '../../utils/axiosinstance';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const response = await axiosinstance.get('/get-all-projects');
                if (response.data && response.data.projects) {
                    setAllProjects(response.data.projects);
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    }, 100);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getAllProjects();
    }, []);

   

    return (
        <>
            <Headroom>
                <Navbar />
            </Headroom>
            <div className="min-h-[100vh] text-center">
                <h1 className="text-6xl underline">Projects</h1>
                <div className="projects w-5/6 my-12 mx-auto py-6 px-3 flex justify-around items-center flex-wrap gap-9">
                    {allProjects &&
                        allProjects.map((project, index) => (
                            <div className="card" key={index}>
                                <ProjectCard project={project} />
                            </div>
                        )).reverse()}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Project;
