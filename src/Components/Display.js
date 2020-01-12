import React, { Component } from 'react'
import '../App.css'; 


export class Display extends Component {

  render() {
    const {maps, countryDeleted}=this.props
    return (
      <div>
      <div className='totalcountries' > Total of { maps.length } contries in this list. <p id='country-deleted' > {countryDeleted} </p>  </div> 
           {
             maps.map((elem, index)=>(
                <div className='mappedCountries' key={index} > {
                    <h2 >Country: <span style={{color: 'green', fontSize: '20px', fontWeight: '800'}} >{elem.name}</span>, 
                        Capital city: <span style={{color: 'green', fontSize: '20px', fontWeight: '800'}} >{elem.capital} </span>, 
                        Region: <span style={{color: 'green', fontSize: '20px', fontWeight: '800'}} > {elem.region} </span> 
                        Population: <span style={{color: 'green', fontSize: '20px', fontWeight: '800'}} > {elem.population} </span> 
                        Languages: {elem.languages.map(ele=> ele.name+', ')} 
                   
                   
                    <p> calling code: <span style={{color: 'blue', fontWeight: '800'}} > {elem.callingCodes},  </span>   
                        timezone: {elem.timezones[0]}, 
                        border countries: {elem.borders.map((elem, i)=> <span key={i} style={{fontSize: '20px', color: 'red'}}>{elem+',  '} </span> )} </p>
                    <br/>
                    {index}
                    <button className='delete-btn' 
                            style={{color: 'red', fontWeight: '800', padding: '10px', fontSize: '15px', border: '2px solid black'}} 
                            onClick={()=>this.props.delete(elem.name, index)} > 
                            Delete this country 
                    </button>
                    </h2>} 
                </div> ))
           }
      </div>
    )
  }
}

export default Display
