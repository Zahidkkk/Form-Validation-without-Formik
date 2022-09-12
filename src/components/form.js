import React, { useState } from "react";
import './FormValidation.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Forms=()=>{
    const [associateName,setassociateName]=useState('')
    const [associateid,setassociateid]=useState('')
    const [emailValue, setemailValue]=useState('')
    const [passwordValue, setpasswordValue]=useState('')
    const [error,setError]=useState(false)
    const [passerror, setPasserror]= useState(false)
    const [formreset, setFormreset] = useState({
      associateName:'',
      associateid:'',
      emailValue:'',
      passwordValue:''
    });
    
    const resetvalue = (e) => {
      e.preventDefault();
      setFormreset({ associateName:'',associateid:'',emailValue:'',passwordValue:''})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(associateName.length===0||associateid.length===0||emailValue.length===0||passwordValue.length===0){
            setError(true)
        }
        if(associateName&&associateid&&emailValue&&passwordValue){
          console.log("Associate Name:",associateName,"\nAssociate ID:",associateid,"\nEmail ID:",emailValue,"\nPassowrd:",passwordValue)
        }

    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])/;
    

    const emailvalidation = (e) =>{
      setemailValue(e.target.value);
    if (emailRegex.test(emailValue)===false){
      setError('*Please enter valid email');
    }else{
      setError("")
       }
    };

    const passwordValidation = (e) =>{
      setpasswordValue(e.target.value)
      if(passwordRegex.test(passwordValue)===false){
        setPasserror('Password should be contains one capital letter, one small letter,one digit and one special character')
      }else{
        setPasserror('')
      }
    };

    return(
        <>
      <Form  className=' p-4' onSubmit={handleSubmit}>  
      <h1 className="fst-italic text-dark pb-5">Sign Up Form</h1>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="fw-bold fs-4">Associate name</Form.Label>
        <Form.Control 
        type="text" 
        name="associateName"
        value={associateName}
        autoComplete='off'
        onChange={e=>setassociateName(e.target.value)}
        placeholder="Associate Name" />
      </Form.Group>
      {error&&associateName.length<=0?<p>*First Name can't be Empty</p>:
       error&&associateName.length<4?<p>*Associate Name must be more than 4 characters</p>:''}

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label  className="fw-bold fs-4">Associate ID</Form.Label>
        <Form.Control 
        type="number" 
        name="associateNameid"
        value={associateid}
        autoComplete='off'
        onChange={e=>setassociateid(e.target.value)}
        placeholder="Associate ID" />
      </Form.Group>
      {error&&associateid.length<=0?<p>*Associate ID can't be Empty</p>:
       error&&associateid.length>=8?<p>*Associate ID should be 8 digits</p>:''}
       

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="fw-bold fs-4">Email address</Form.Label>
        <Form.Control 
        type="email" 
        name="emailValue"
        value={emailValue}
        autoComplete='off'
        onChange={emailvalidation}
        placeholder="Email" />
      </Form.Group>
      {error&&emailValue.length<=0?<p>*Email ID can't be Empty</p>:''}
      <p>{error}</p>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="fw-bold fs-4">Password</Form.Label>
        <Form.Control 
        type="password" 
        name="passwordValue"
        value={passwordValue}
        autoComplete='off'
        onChange={passwordValidation}
        placeholder="Password" />
      </Form.Group>
      {error&&passwordValue.length<=0?<p>*Password can't be Empty</p>:
       error&&passwordValue.length<6?<p>*Password length must be more than 6</p>:
       error&&passwordValue.length>8?<p>*Password length must be no more than 8</p>:''}
       <p>{passerror}</p>
      <br/><br/>
      <Button variant="success" type="submit">
        Submit
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="primary" type="reset" value='reset' onClick={resetvalue} >
        Reset
      </Button>
    </Form>
        </>
    );
}
