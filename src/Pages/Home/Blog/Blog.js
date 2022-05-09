import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div className='blog-section mx-auto shadow-lg bg-white text-center mt-4 p-3'>
            <h1 className='fs-1 font-italic font-weight-bold'>Answer to the Question: </h1>
            <div className='mt-4 px-3 mb-2'>
                <h3>Q: Difference between javascript and nodejs.</h3>
                <h6 className='px-3 text-wrap'>A:Javascript is a programming language, which runs in web browsers.On the other hand, Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. Javascript can run any browser with a default browser running environment.It is a very strong language normally used for a web application on any verification or any specific business logic. JavaScript also helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables which is based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program</h6>
            </div>
            <div className='mt-4 px-3 mb-2'>
                <h3>Q: When should you use nodejs and when should you use mongodb?</h3>
                <h6 className='px-3 text-wrap'>A: MongoDB and NodeJS are two different technologies. MongoDB is a database system which gives the user a chance to efficiently store documents/data in a database and to perform operations like data updates, or to search documents/data by some criterias.
                    NodeJS's responsibilty is especially to execute the application.</h6>
            </div>
            <div className='mt-4 px-3 mb-2'>
                <h3>Q: Differences between sql and nosql databases. </h3>
                <h6 className='px-3 text-wrap'>A: SQL databases are vertically scalable.On the other hand, NoSQL databases are horizontally scalable. SQL databases are table-based. NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are useful for multi-row transactions,and NoSQL is useful for unstructured data like documents or JSON. </h6>

            </div>
            <div className='mt-4 px-3 mb-5'>
                <h3>Q: What is the purpose of jwt and how does it work </h3>
                <h6 className='px-3 text-wrap'>A: JWT which is stands for JSON Web Token, is an open standard used to share security information between two parties —where one of is a client and another on is a server. Each JWT contains encoded JSON objects, including a set of claims. JWT's are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. It's an encoded, url-safe string that can contain an unlimited amount of data and is cryptographically signed. When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source.</h6>

            </div>

        </div>
    );
};

export default Blog;