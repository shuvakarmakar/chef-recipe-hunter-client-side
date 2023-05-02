// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='card p-10'>
                <p className='text-lg font-bold'>Question 1 : Differences between uncontrolled and controlled components?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>
                    <span className='font-bold'>Controlled component :</span> In a controlled component, the value of the input element is controlled by React. We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well. When a user enters data inside the input element of a controlled component, onChange function gets triggered and inside the code we check whether the value entered is valid or invalid. If the value is valid, we change the state and re-render the input element with new value.
                    <br />
                    <span className='font-bold'>Uncontrolled component :</span> In an uncontrolled component, the value of the input element is handled by the DOM itself. Input elements inside uncontrolled components work just like normal HTML input form elements. The state of the input element is handled by the DOM. Whenever the value of the input element is changed,event-based callbacks are not called. Basically, react does not perform any action when there are changes made to the input element. Whenever use enters data inside the input field, the updated data is shown directly. To access the value of the input element, we can use ref.
                </p>

                <p className='text-lg font-bold mt-5'>Question 2 : How to validate React props using PropTypes?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.</p>
                <br />
                <p><span className='font-bold'>App.propTypes</span> is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>

                <p className='text-lg font-bold mt-5'>Question 3 :  What is the difference between nodejs and express js?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>Node.js and Express.js are both JavaScript-based technologies used for building server-side web applications, but they serve different purposes.</p>
                <br />
                <p>Here are some key differences between Node.js and Express.js:
                <br />
                i.Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.
                <br />
                ii.Node.js provides a set of built-in modules for handling network requests, file I/O, and other system-level tasks, while Express.js provides a set of tools and utilities for building web applications.
                <br />
                iii.Node.js can be used on its own to build web applications, but it requires a lot of low-level coding. Express.js simplifies the process of building web applications by providing a higher-level API.
                <br />
                iv.Node.js is suitable for building a wide range of server-side applications, while Express.js is specifically designed for building web applications.</p>

                <p className='text-lg font-bold mt-5'>Question 4 : What is a custom hook, and why will you create a custom hook?</p>
                <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>useMemo() is a hook that allows us to memoize expensive computations so that they are only recomputed when their dependencies change. This can help improve the performance of our application by avoiding unnecessary computations.

                    useMemo takes a function and an array of dependencies as arguments. The function is only re-executed when one of the dependencies changes. If none of the dependencies have changed since the last render, the memoized value from the previous render is returned instead.</p>
                <br />
            </div>
        </div>
    );
};

export default Blog;