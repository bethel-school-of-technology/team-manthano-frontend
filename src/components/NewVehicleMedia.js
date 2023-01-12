import React, { createElement } from 'react'
import Form from 'react-bootstrap/Form';

const NewVehicleMedia = (props) => {

 const { handleChange, newVehicle } = props;

 const displayPreview = (img) => {
  const { Images } = img;
  return (
   <section className="img-preview">
    <p>Image preview</p>
    <img src={Images} alt="uploaded image" />
   </section>
  )
 }
 return (
  <div className='media-upload-container'>
   <Form.Group className="mb-3" controlId="Images">
    <Form.Label>Vehicle Image</Form.Label>
    <Form.Control type="text" placeholder="https://example.com" name="Images" value={newVehicle.Images} onChange={handleChange} />
   </Form.Group>

   {newVehicle.Images.length > 0 && displayPreview(newVehicle)}
  </div>
 )
}

export default NewVehicleMedia