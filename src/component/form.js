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
            errorContent:false,
            regEx :/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            alphaRegEx : /^[A-z]+$/
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

    componentWillUpdate(nextProps,nextState){
       
        nextState.errorContent = !(nextState.email.match(this.state.regEx) && nextState.password.length >= 6 && nextState.confirmPassword == nextState.password && nextState.userName.match(this.state.alphaRegEx) && nextState.firstName.match(this.state.alphaRegEx) && nextState.lastName.match(this.state.alphaRegEx))
    }

    fieldValidation(name,value){       
        const error = document.getElementById(`${name}Error`);
        var field='';
       
        if(name == 'email'){
            if(!value.match(this.state.regEx)){
                error.textContent = `Email is invalid`;
                      document.getElementsByName("email")[0].style.borderColor="red";
            }else{
                    error.textContent=` `;
                    document.getElementsByName("email")[0].style.borderColor="lightblue";
            }
        }
        
        else if (name == 'username'){
            if(!value.match(this.state.alphaRegEx)){
                error.textContent = `Username is invalid`;
                document.getElementsByName("username")[0].style.borderColor="red";
            }
            else{
                error.textContent=` `;
                document.getElementsByName("username")[0].style.borderColor="lightblue";
            }
        }
        
        else if (name == 'password'){
            field = value;
            if(value.length >= 6){
                error.textContent=` `;
                document.getElementsByName("password")[0].style.borderColor="lightblue";
            }
            else{
                error.textContent = 'Password must contain 6 characters';
                document.getElementsByName("password")[0].style.borderColor="red";
            }
        }
        else if (name == 'cnfrmPssd'){
            if((value == this.refs.password.value) && (value.length >= 6)){
                document.getElementsByName("cnfrmPssd")[0].style.borderColor="lightblue";
                error.textContent=` `;
            }
            else{
                error.textContent=`Passwords not match`;
                document.getElementsByName("cnfrmPssd")[0].style.borderColor="red";
            }
        }
    }
            
    handleSubmit(event){
        event.preventDefault();
        alert("Submitted successfully!!!");
          document.signup.reset();      
      }
    render(){
        return(
            <React.Fragment>
               <form name="signup" className="signup"> 
                 <h2>Register</h2>
                 <p>Join the community and improve your game <br/>with <b>ANGLR</b></p>
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
                    <input type="email" name="email" ref="email"   value={this.state.email} onChange={this.handleChange} placeholder="Email" required/>
                    
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaUser/></i>
                    <input type="text" placeholder="User Name" name="username" ref="username" className="username" value={this.state.username} onChange={this.handleChange} required/>
                  
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaUnlockAlt/></i>
                    <input type="password"  name="password" placeholder="Password" name="password" className="password" ref="password" value={this.state.password} onChange={this.handleChange} required/>
                   
                 </div>   
                 <div className="line">
                    <i><FontAwesome.FaLock /></i>
                    <input type="password" name="cnfrmPssd" placeholder="Confirm Password" ref="cnfrmPssd" value={this.state.cnfrmPssd} onChange={this.handleChange} required/>
                    
                 </div>   
                    <p>By registering you agree to <br/> our <b>Terms</b> and <b>Privacy Policy</b></p>
                    <div className="validationmssg">
                            {/* <div className="error" id="firstNameError"></div>
                            <div className="error" id="lastNameError"></div> */}
                            <div className="error" id="usernameError"></div>
                            <div className="error" id="emailError"></div>
                            <div className="error" id="passwordError"></div>
                            <div className="error" id="cnfrmPssdError" ></div>
                    </div>
                 <input type="submit" name="Register" value="Register" className="register" disabled={!this.state.errorContent} onClick={this.handleSubmit}/>
                 <hr/>
                 <p>Already have account?<b>SIGN IN</b> </p>
               </form>  
            </React.Fragment>
        );
    }
}
export default Form;