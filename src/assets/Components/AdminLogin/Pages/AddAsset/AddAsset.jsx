import React, { useContext } from 'react';
import {useRef} from 'react';

import { toast,ToastContainer } from 'react-toastify';

const AddAsset = () => {


    const handlebutton = event => {

        event.preventDefault();
    
        const form = event.target;
    
        const Product_Name = form.Product_name.value;
        const Asset_Type= form.Type.value;
        const Product_Type= form.PType.value;
        const Product_Quantity = form.quantity.value;
        const time=Date()
        const Date_Added=time.toString()
       
       
    
    
        
       
    
        const newProduct = {Product_Name,Product_Type,Asset_Type,Product_Quantity,Date_Added
        }
    
        console.log(newProduct)
    
        
        
        fetch('http://localhost:5000/allassets',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(newProduct),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged)
            {
                toast('Successfully added')
            }
        })
        
       
    }


    return (
          <div className='max-w-5xl mx-auto mt-20'>
             <div className=" p-24 rounded-lg">
            <h2 className="text-3xl font-extrabold text-center">Add a Asset</h2>
            <form onSubmit={handlebutton}>
                
                <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="Product_name" placeholder="Product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="PType" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Select Asset Type</span>
                        </label>
                            <select  className="input input-bordered w-full" id="category" name="Type">
                            <option value="select">Select</option>
                                <option value="Returnable">Returnable</option>
                                <option value="Non-returnable">Non-Returnable</option>
                                
                               
                            </select>
                    </div>

                   
                   
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Product Quantity</span>
                        </label>
                        <label className="input-group">
                            <input required type="text" name="quantity" placeholder="Product Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control btn bg-slate-300  text-white mt-8">
                        <input type="submit" value="Add asset" />
                    </div>
                    
            </form>
            <ToastContainer />
        </div>
        </div>
    );
};

export default AddAsset;