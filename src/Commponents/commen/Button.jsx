import React from 'react'
import { Link } from 'react-router'
const Button = (props) => {
    return (
        <>
            <button className="border-3 border-white rounded-4xl py-3 text-xl  px-10  hover:border-[#161415]
           hover:bg-[#ffffff]
           hover:text-black cursor-pointer w-full">
                <Link to={props.Link}> {props.title}</Link>
            </button>
        </>
    )
}

export default Button
