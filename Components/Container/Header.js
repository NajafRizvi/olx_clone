import React, { useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import banner from './images/olx_banner.jpg'
import { MdMyLocation } from "react-icons/md";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Modal from 'react-awesome-modal';
import { signInWithGoogle } from '../../firebase'
import './App.css';
import  {useHistory} from 'react-router-dom'
import Category from './Category';

 const Header = ()=>{
         const [visible,setVisible] = useState(false);
         const history = useHistory()
        
    const openModal = ()=> {
       setVisible(true)
    }

    const closeModal = ()=> {
        setVisible(false)
    }

    return (
            <>
                  <Modal
                        visible={visible}
                        width="400"
                        height="584"
                        effect="fadeInUp"
                        onClickAway={() =>closeModal()}
                    >
                        <div className="p-3 popup_wrapper">
                        <a href="javascript:void(0);" onClick={() =>closeModal()} className="d-flex justify-content-end"><AiOutlineClose size={40}></AiOutlineClose></a>
                            <div className="row mx-auto mb-2 mt-5">

                                <button className="btn btn-lg btn-block btn-outline popup-button text"
                                        onClick={()=>history.push('/Signup')}>
                                        
                                Continue with Email
                                </button>
                                
                            </div>

                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button " >
                                    Continue with facebook
                                </button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button" 
                                onClick={()=>signInWithGoogle()} >
                                Continue with google
                                </button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button">Continue with email</button>
                                
                            </div>

                            <div className="row mx-auto mb-2 d-flex justify-content-center">
                            <p className="text-muted"><small>We won't share your personal details with anyone</small></p>
                            <p className="text-muted text-center mt-0 pt-0"><small>If you continue, you are accepting <span className="text-primary">OLX Terms</span></small></p>
                            <p className="text-center text-primary mt-0  pt-0"><small>and Conditions</small></p>
                            </div>
                           
                        </div>
                    </Modal>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top top-navbar">
                    <a className="navbar-brand" href="#">
                        
                    </a>
                    <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item-location">
                                <div className="input-icons dropdown">
                                    <ion-icon name="search"></ion-icon>
                                    <button className="btn location" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Punjab
                                    <span className="chevron-down-header"><ion-icon name="chevron-down"></ion-icon></span>
                                    </button>
                                    {/* <span className="chevron-down"><ion-icon name="chevron-down"></ion-icon></span> */}

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item pt-0 text-decoration-none">
                                                <div className="d-flex w-100 h-25 pt-3">

                                                    <MdMyLocation size={30}></MdMyLocation>

                                                    <h5 className="mb-1 ml-3 text-primary">Use Current Location</h5>

                                                </div>
                                                <div><p className="ml-5 text-primary">location blocked. Check browser/phone settings.</p></div>
                                            </a>
                                            <a href="#" className="list-group-item text-decoration-none ">
                                                <p className="text-muted font-weight-normal ">POPULAR LOCATION</p>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3 font-weight-normal font-weight-lighter">Punjab</p>


                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">IslamabadnCapital Territory</p>


                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">Sindh</p>


                                                </div>
                                                <div className="d-flex w-100 h-25 mt-3 pt-3">
                                                    <HiOutlineLocationMarker size={30}></HiOutlineLocationMarker>
                                                    <p className="mb-1 ml-3">Khybar Pakhtunkhwa</p>


                                                </div>

                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="input-group nav-item-find">
                                <input type="text" placeholder="Find Cars,Mobile Phones and more..." className="form-control find" aria-label="Username" aria-describedby="basic-addon1"></input>
                                <div className="input-group-prepand">
                                    <span className="input-group-text search-icon" id="basic-addon1"><ion-icon name="search"></ion-icon></span>
                                </div>
                            </li>
                        </ul>

                        <label className="ml-4 text-login" name="login" onClick={() =>openModal()}>Login</label>
                        <button className="btn btn-outline my-2 my-sm-0 mr-5 rounded-pill sell-button" onClick={() =>openModal()} type="submit">Sell</button>

                    </div>
                </nav>
                <Category></Category>
                <img src={banner} className="img-fluid h-100 w-100 d-block"></img>
            </>
        )

}

export default Header