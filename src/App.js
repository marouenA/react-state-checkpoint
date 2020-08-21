import React from 'react';

class welcome extends  React.Component{
  constructor(props){
   super(props);
  
  this.state ={
    person:{fullName:"avatar",
    bio:"avatar avatar",
    imgsrc:"https://geeko.lesoir.be/wp-content/uploads/sites/58/2020/05/avatar.jpg",
    profession:"avatar avatar avatar avatar"},
    hidden:true,
    count:0,
  };
}
show=()=>{this.setState({hidden:false})}
changecount=()=>{this.setState({count:this.state.count+10})}
componentDidMount () {
  setInterval(this.changecount,1000)}

  render()
  {
  return( 
    <div>

  {this.state.hidden ?      <button type="button" onClick={this.show}>show person</button>  :    <div> <h1>{this.state.person.fullName}</h1>
  <h2>{this.state.person.bio}</h2>
  <h2>{this.state.person.profession}</h2>
  <h3>{this.state.count}</h3>
  <img src={this.state.person.imgsrc} alt="avatar" style={{width:"200px"}} />
  
   </div>}
     
    </div>
  
    );

  }
}
export default welcome;
   