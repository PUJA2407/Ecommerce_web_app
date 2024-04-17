import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className='descriptionbox'>
    <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
    </div>
    <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate buying and selling of products or services
        over the internet serves serves as a virtual marketplace whrer business and individuals showcase their
         products, interact with customers, and conduct trasaction without the need for a physical presence.</p>

         <p>
            E-commerce website typically display products or services along with detailed descriptio,images,price,
            and any available variations.Each product usually has its own dedicated page with relevant infromation.
         </p>
    </div>

        </div>
    )
}

export default DescriptionBox