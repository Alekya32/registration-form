import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';


class Form extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            cnfrmPssd:'',
            email:'',
            zipcode:'',
            error:'',
            errorContent:true
            };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
           
           var  name=event.target.name;
           var value=event.target.value;
           this.setState({ [event.target.name]: event.target.value},
            () => { this.fieldValidation(name, value) });
    }

    fieldValidation(name,value){
        // console.log("Hi");
        // var num = /[0-9]/;
        
        var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var alphaRegEx = /^[A-z]+$/;
        const error = document.getElementById(`${name}Error`);
        var field='';

       
        if(name == 'email'){
            if(!value.match(regEx)){
                console.log(this.refs.email.value);
                error.textContent = `Email is invalid`;
                    // document.getElementsById('email').style.borderColor = "red";
            }else{
                error.textContent = '';
                  //document.getElementsById('email').style.borderColor = "lightblue";
            }
        }
        
        else if (name == 'username'){
            if(!value.match(alphaRegEx)){
                error.textContent = `Username is invalid`;
                 // document.getElementById('username').style.borderColor = "red";
            }
            else{
                error.textContent = '';
              // document.getElementById('username').style.borderColor = "lightblue";
            }
        }
        
        else if (name == 'password'){
            field = value;
            if(value.length < 6){
                error.textContent = `Password must contain 6 characters`;
                //  document.getElementById('password').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                 //  document.getElementById('password').style.borderColor = "grey";
            }
        }
        else if (name == 'cnfrmPssd'){
            if(this.refs.cnfrmPssd.value == this.refs.password.value){
                error.textContent='Passwords not match';
            }
            else{
                error.textContent='';
            }
        }
    }
            
    handleSubmit(event){
        event.preventDefault();
        alert("Submitted successfully!!!");
        
      }
    render(){
        return(
            <React.Fragment>
               <form className="signup"> 
                 <h2>Register</h2>
                 <p>Join the community and improve your game <br/>with<b>ANGLR</b></p>
                 <div className="line">
                        <i><FontAwesome.FaUser/></i>
                        <input type="text" name="firstName" placeholder="First Name"/>
                 </div>
                 <div className="line">
                    <i><FontAwesome.FaUser/></i>
                    <input type="text" name="lastName" placeholder="Last Name"/>
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaMapMarker/></i>
                    <input type="text" name="zipcode" placeholder="Zip code" ref="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaEnvelope /></i>
                    <input type="email" name="email" ref="email"  id="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required/>
                    
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaUser/></i>
                    <input type="text" placeholder="User Name" name="username" ref="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
                  
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaUnlockAlt/></i>
                    <input type="password"  name="password" placeholder="Password" name="password" id="password" ref="password" value={this.state.password} onChange={this.handleChange} required/>
                   
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaLock /></i>
                    <input type="password" name="cnfrmPssd" placeholder="Confirm Password" id="cnfrmPssd" ref="cnfrmPssd" value={this.state.cnfrmPssd} onChange={this.handleChange} required/>
                    
                 </div>   
                    <p>By registering you agree to <br/> our <b>Terms</b> and <b>Privacy Policy</b></p>
                    <div className="errorMsg">
                            {/* <div className="error" id="firstNameError"></div>
                            <div className="error" id="lastNameError"></div> */}
                            <div className="error" id="usernameError"></div>
                            <div className="error" id="emailError"></div>
                            <div className="error" id="passwordError"></div>
                            <div className="error" id="confirmPasswordError" ></div>
                    </div>
                 <input type="submit" name="Register" value="Register" className="register" onClick={ this.handleSubmit }/>
                 <hr/>
                 <p>Already have account?<b>SIGN IN</b> </p>
               </form>  
            </React.Fragment>
        );
    }
}
export default Form;