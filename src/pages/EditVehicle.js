import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate, useParams } from "react-router-dom";
import VehicleContext from "../context/VehicleContext";



function EditVehicle() {

  let params = useParams();

  let [vehicle, setVehicle] = useState({
    id: params.id,
    Name: "",
    Mileage: 0,
    Price: 0,
    Status: "",
    Condition: "",
  })

  let { getSingleVehicle, editVehicle } = useContext(VehicleContext)
  let navigate = useNavigate()
  let { id, Name, Mileage, Price, Status, Condition } = vehicle

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getSingleVehicle(id)
        .then((vehicle) => setVehicle(vehicle))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    console.log(event.target.name)
    console.log(event.target.value)
    setVehicle((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    editVehicle(vehicle).then(() => {
      navigate('/account');
    }).catch(error => {
      console.log(error);
      alert('You received the following error: ', error)
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
        <Form.Select name="Status" onChange={handleChange}>
          <option value={Status}>{Status}</option>
          {Status !== 'For Sale' && <option value="For Sale">For Sale</option>}
          {Status !== 'Pending' && <option value="Pending">Pending</option>}
          {Status !== 'Sold' && <option value="Sold">Sold</option>}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Conditon</Form.Label>
        <Form.Select name="Condition" onChange={handleChange}>
          <option value={Condition}>{Condition}</option>
          {Condition !== 'New' && <option value="New">New</option>}
          {Condition !== "Used" && <option value="Used">Used</option>}
        </Form.Select>
      </Form.Group>

      <Button type="submit">Save</Button>

    </Form>
  )
}

export default EditVehicle;