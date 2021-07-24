import React from 'react';



function Footer(){
const date = new Date();
const year = date.getFullYear();

    return  <footer><p>All right reserved to Gilad Cohen © {year}. </p></footer>;
}

export default Footer;