import React, {Component} from 'react';
import axios from 'axios'; 
import './App.css';
import Header from './Components/Header'; 
import Modify from './Components/ Modify'; 
import Display from './Components/Display'

class App extends Component {
  constructor () {
    super (); 

    this.state = {
      countries: [],
      countryDeleted: ''
    }
  }

  componentDidMount () {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
          this.setState({countries: res.data})
          console.log(res.data)
        })
        .catch(err=>console.log(err))
  }

  contrySearch = (inputVal, actual) => {
    axios.get(`https://restcountries.eu/rest/v2/${actual}/${inputVal}`)
        .then(res=>{
          this.setState ({countries: res.data})
        })
        .catch(err=>console.log(err))
  }

  handleReset = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
        this.setState({countries: res.data})
        })
        .catch(err=>console.log(err))
  }

  
  delete = (country, i) => {
    let newList = this.state.countries.filter((v, ind)=>ind!==i); 
    this.setState ({countries: newList, countryDeleted: `${country} is deleted` }); 
    setTimeout(()=>{
      this.setState({countryDeleted: ''})
    }, 1000)
}

  render () {
    const {countries, countryDeleted} = this.state
    return (
      <div className="App">
          <Header /> 
          <Modify contrySearch={this.contrySearch} handleReset={this.handleReset} /> 
          <Display maps={countries} delete={this.delete} countryDeleted={countryDeleted} />
      </div>
      );
    }
  }

export default App;
