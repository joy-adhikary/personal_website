import * as React from "react";
import "../Style/card.css";

const courses = [
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    },
    {
        title: "The Complete Python Bootcamp From Zero to Hero in PythonLearn Python",
        author: "Josh Portilla",
        ratings: "4.6",
        reviews: "(7888)",
        price: "$9.99",
        level: "intermediate",
        imgSrc: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
    }
];

const Card = () => {
    return (
        <>
            <div className="CardContainer">
                <h2>All Courses</h2>
                <div className="CardContent">
                    {courses.map((course, index) => (
                        <div className="Cards" key={index}>
                            <img
                                src={course.imgSrc}
                                alt="course"
                                width="240"
                                height="135"
                                loading="lazy"
                                style={{ overflow: 'hidden', width: '100%', height: 'auto' }}
                            />
                            <div className="lowerCard">
                                <p className="title">{course.title}</p>
                                <p className="author">{course.author}</p>
                                <p className="ratings">
                                    {course.ratings}
                                    <span>{course.reviews}</span>
                                </p>
                                <p className="Price">
                                    {course.price} <span className="cross">{course.level}</span>
                                </p>
                                <p className="Hover">
                                 <span>hello</span>
                                <button className="button-23">Add to cart</button>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
