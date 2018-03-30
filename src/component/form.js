import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <React.Fragment>
               <form className="signup"> 
                 <h2>Register</h2>
                 <input type="text" placeholder="First Name"/>
                 <input type="text" placeholder="Last Name"/>
                 <input type="text" placeholder="Zip code"/>
                 <input type="text" placeholder="Email"/>
                 <input type="text" placeholder="User Name"/>
                 <input type="text" placeholder="Password"/>
                 <input type="text" placeholder="Confirm Password"/>
                 <button class="register">Register</button>
                 <hr/>
                 <p>Already have account?<b>SIGN IN</b> </p>
               </form>  
            </React.Fragment>
        );
    }
}

export default Form;