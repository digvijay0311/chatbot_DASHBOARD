import React, { useState } from 'react'
import './addNewDepartment.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AddNewDepartment() {
  const navigate = useNavigate();
  const [addDepartmentData,setAddDepartmentData] = useState({})

  const addDepartment = async ()=>{
    console.log(addDepartmentData,"addDepartmentData")
    // try{
    //   const res = await axios.post('https://dummyjson.com/users/add',addDepartmentData)
    //   console.log(res.data);
    //   navigate('/')
    // }
    // catch(err){
    //   console.log(err)
    // }
  }
  const handleAddDepartment = (event)=>{
    event.preventDefault();
    console.log(addDepartmentData);
    addDepartment();
  }
  return (
    <div className="viewDetails-container">
        <div className="viewdetails-nav-txt">
            <span id='nav1'>Department list</span>
            <span className='nav2'>{'\u3009'}</span>
            <span className='nav2'>Add new Department</span>
        </div>

        <div className="form-container">
            <div className="department-container">
              <label htmlFor="departName">Department Name</label>
              <input type="text" name="departName" id="departName" onChange={(e)=>setAddDepartmentData({...addDepartmentData,firstName:e.target.value})} placeholder='Enter Deoartment name'/>
            </div>
            <div className="form-input-container">
              <div className="input1">
                <label htmlFor="store">Store</label>
                <select placeholder='Select store' name="store" id="store" onChange={(e)=>setAddDepartmentData({...addDepartmentData,state:e.target.value})}>
                  <option value="">Select state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="harkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="input1">
              <label htmlFor="city">City</label>
                <select onChange={(e)=>setAddDepartmentData({...addDepartmentData,lastName:e.target.value})} placeholder='Select city' name="city" id="city">
                  <option value="">Select city</option>
                  <option value="Prayagaraj">Prayagraj</option>
                  <option value="Pratapgarh">Pratapgarh</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Azamgarh">Azamgarh</option>
                </select>
              </div>
              <div className="input1">
              <label htmlFor="postal">Postal Code</label>
                <input onChange={(e)=>setAddDepartmentData({...addDepartmentData,age:e.target.value})} type="text" name="postal" id="postal" placeholder='Enter postal code'/>
              </div>
            </div>
            <div className="form-input-container">
              <div className="input1">
              <label htmlFor="email">Email</label>
              <input onChange={(e)=>setAddDepartmentData({...addDepartmentData,email:e.target.value})} type="email" name="email" id="email" placeholder='Enter email' />
              </div>
              <div className="input1">
              <label htmlFor="password">Password</label>
              <input onChange={(e)=>setAddDepartmentData({...addDepartmentData,password:e.target.value})} type="password" name="password" id="password" placeholder='*******'/>
              </div>
              <div className="input1">
              {/* <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" /> */}
              </div>
            </div>
            <div className="form-textArea-container">
              <label htmlFor="address">Complete Address</label>
              <textarea  onChange={(e)=>setAddDepartmentData({...addDepartmentData,address:e.target.value})} placeholder='Enter address' name="address" id="address" cols="30" rows="7"></textarea>
            </div>
        </div>
        <div className="btn-container">
            <button onClick={()=>navigate('/')} className='btn1'>Cancel</button>
          
            <button className='btn2' onClick={handleAddDepartment}>Add Department</button>
          
        </div>
        
    </div>
  )
}
