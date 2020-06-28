import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
  array:[],index:0};

  }
  
  handleChange = (event) => {
    this.setState({value: event.target.value});
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      array:this.state.array.concat(this.state.value)
    })
    alert('A item was added: ' + this.state.value);
    console.log(this.state.array)
    
  }

  delete = (i,e) => {
    e.preventDefault();
    let filteredArray = this.state.array.filter(item => item !== i)
    this.setState({
      array: filteredArray
    })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 align='center'>ToDo List</h2>
        <form onSubmit={this.handleSubmit}>
          <span style={{fontSize:'20px'}}>Name:</span>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br />

        <input type="submit" value="Add" />
        <br/>
        <br/>
      </form>
      <div>
      <table>
              <tr>
                <td style={{fontSize:'20px'}}>Item</td>
                <td style={{fontSize:'20px'}}>Delete</td>
              </tr>
        {
          this.state.array.map((item)=>{
            return(
              <tr>
              <td style={{fontSize:'20px'}}>{item}</td>
              <td><span onClick={(event)=>this.delete(item,event)}><DeleteIcon style={{marginRight:'20px',color:'red',cursor:'pointer'}}
            ></DeleteIcon > </span></td>
              </tr>
            
            )
          })
        }
        </table>
      </div>
      </header>
    </div>
    )
  }
}

