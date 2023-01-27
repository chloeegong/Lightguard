import React, { useState, useEffect } from "react"; 

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form"; 
import * as Yup from "yup";


// auth connect to backend 

const defaultValues = {
  email: '',
  passwords: '', 
}; 

// Validation schema for Login form 
const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required.'),
}); 

function Login() {
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false); 
  const [renderSnackbar, setRenderSnackbar] = useState(false); 

  // Redux variables and hooks 
  const auth = useSelector((state) => state.auth); // gets current state 
  const message = useSelector((state) => state.message); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const {
    handleSubmit, 
    control, 
    formState: { errors }, 
  } = useForm({

  })

}