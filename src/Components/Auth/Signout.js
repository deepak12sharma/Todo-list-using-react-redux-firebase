import React , {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { signup } from '../../store/actions/authActions'
class Signout extends Component{
  state={
email:'',
password:'',
firstName:'',
lastName:''
  }

  handleChange =(e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e)=>{
   e.preventDefault();
   this.props.signup(this.state)
  }
  render(){
    const {auth,authError}=this.props;
    if(auth.uid) return<Redirect to= '/'/>
    return(

      <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Out</h5>
          <div className="input-field">
          <label htmlFor="firstName">First Name</label>
         <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <label htmlFor="lastName">LastName</label>
         <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <label htmlFor="email">Email</label>
         <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <label htmlFor="password">Password</label>
         <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
          {authError ?<p>{authError}</p>:null}
          </div>
          </div>
          </form>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return{

    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}
const mapdispatchToProps = (dispatch) => {
  return{
    signup:(newUser)=>dispatch(signup(newUser))
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(Signout);
