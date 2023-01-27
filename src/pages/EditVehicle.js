import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate, useParams } from "react-router-dom";
import VehicleContext from "../context/VehicleContext";



function EditVehicle() {

  let params = useParams();
  
  let [ vehicle, setVehicle ] = useState({
    id: params.id,
    Name: "",
    Mileage: 0,
    Price: 0,
    Status: "",
    Condition: "",
  })

  let { getSingleVehicle,editVehicle } = useContext(VehicleContext)
  let navigate = useNavigate()
  let { id, Name, Mileage, Price} = vehicle 

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getSingleVehicle(id)
        .then((vehicle) => setVehicle(vehicle))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setVehicle((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function addOrUpdate() {
    if (id === undefined) {
      return editVehicle(vehicle) 
  
    } 
  }

  function handleSubmit(event) {
    event.preventDefault()
    addOrUpdate(vehicle).then(() => {
        navigate('/');
    }).catch(error => {
        console.log(error);
        navigate('/');
    });
}

  

  return (
    <Form onSubmit={handleSubmit}>
    
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="Name" value={Name} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mileage</Form.Label>
        <Form.Control type="number" name="Mileage" value={Mileage} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="Price" value={Price} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Status</Form.Label>
        <Form.Select name="Condition" onChange={handleChange}>
            <option value="For Sale">For Sale</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>"
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Conditon</Form.Label>
        <Form.Select name="Condition" onChange={handleChange}>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </Form.Select>
      </Form.Group>

      <Button type="submit">Save</Button>
      
    </Form>
  )
}

export default EditVehicle;