import React from 'react';
import ApiService from '../../utils/apiService';
class NewProviderForm extends React.Component {
  constructor(props){
    super(props)
    this.state= {
     name: '',
     type:'',
    address:'',
    state: '',
    rating: ''
    
   }
   }
  // TASK 4: Add New Provider
  // Add Functionality to the form below
  // On submission it should make a POST request to 
  // the server to create a new provider.
  // Refer to the API documentation for details.
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, address, state, rating, type } = this.state
    console.log(name, address, state, rating, type)

    ApiService.post(ApiService.ENDPOINTS.providers, {
      name, rating, type, location: {
        state,
        address
     },
      imageUrl: "https://via.placeholder.com/400x200"
    })
    .then(window.location.reload())
    .catch((err)=>{
     console.log(err)
     throw new Error(err);
    })
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className="form" onSubmit={(e)=>this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Provider Name:</label>
          <input className="input__style_1" type="text" name="name" onChange={(e)=>this.handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider Address:</label>
          <input className="input__style_1" type="text" name="address" onChange={(e)=>this.handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider State:</label>
          <input className="input__style_1" type="text" name="state" onChange={(e)=>this.handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Provider Rating:</label>
          <select className="select input__style_1" type="number" name="rating" onChange={(e)=>this.handleChange(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Provider type:</label>
          <select className="select input__style_1" type="text" name="type">
            <option value="hospital">Hospital</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>        
        <div className="form-group">
          <label htmlFor="image">Provider Image</label>
          <img src="https://via.placeholder.com/400x200" alt="new provider"/>
          <input type="file" name="file" />
        </div>
        <div className="form-group button-row">
          <button
            type="submit"
            className="btn btn-primary no-margin"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NewProviderForm;