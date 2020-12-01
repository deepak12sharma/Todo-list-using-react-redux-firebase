import React,{ Component } from 'react';
 class adminRole extends Component
 {
   handleSubmit=(e)=>{
     e.preventDefault();
     
   }
   render(){
     return(
     <div>
     <form class="center-align admin-actions" onSubmit={this.handleSubmit}>
      <input type="email" placeholder="User email" id="admin-email" required />
      <button class="btn-small yellow darken-2 z-depth-0">Make admin</button>
      </form>
     </div>
     )
   }
 }
 export default adminRole;
