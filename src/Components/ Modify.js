import React, { Component } from 'react'
import '../App.css'; 



export class  Modify extends Component {
  constructor () {
    super(); 

    this.state = {
      country: '', 
      capital: '',
      region: ''
    }
  }

  handleChange = (val) => {this.setState({[val.target.name]: val.target.value })}

  handleSearch = () => {
    let inputValue = ''; 
    let actualVal = ''; 
    if (this.state.country.length>=1) { 
      inputValue=this.state.country
      actualVal='name'
    } 
    else if (this.state.capital.length>=1) {
      inputValue=this.state.capital
      actualVal='capital'
    }
    else if (this.state.region.length>=1) {
      inputValue=this.state.region
      actualVal='region'
    }
    this.props.contrySearch(inputValue, actualVal); 
  }
  
  handleReset = () => {
    this.props.handleReset();
    this.setState ({country: '', capital: '', region: ''})
  }


  render() {
    const {country, capital, region} = this.state; 
    return (
      <div className='modify' >
          <div className='search' > <h2>  Search by country, by region and by  </h2> </div>
          <div className='search-bar' >
              <input className='input'
                  placeholder='Search by country' 
                  name='country' 
                  onChange={e=>this.handleChange(e)}
                  value={country} />

              <input className='input'
                  placeholder='Search by Capital city' 
                  name='capital' 
                  onChange={e=>this.handleChange(e)}
                  value={capital}  /> 

              <input className='input'
                  placeholder='Search by region' 
                  name='region'
                  onChange={e=>this.handleChange(e)}
                  value={region} /> 

              <button className='input' onClick={e=>this.handleSearch(e)} > Search </button>
              <button className='input' onClick={()=>this.handleReset()} > RESET </button>
          </div>
      </div>
    )
  }
}

export default  Modify
