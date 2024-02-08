import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className = "bg-dark text-white text-center p-5">{`Copyright © Maria and David ${year}`}</footer>;
};


export default Footer;