import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';

const NewVehicleMedia = (props) => {

 const { uploadedFiles, setUploadedFiles } = props;
 const hiddenFileInput = useRef(null);

 const handleClick = () => {
  hiddenFileInput.current.click();
 };

 const handleFileChange = event => {
  // Get images
  const selectedFiles = Object.values(event.target.files);
  selectedFiles.map(file => {
   // Create Image URL
   const url = URL.createObjectURL(file);
   // Create object with image data and url
   const newFile = {
    [url]: file
   }
   // Add it to the array
   setUploadedFiles((prevValue) => {
    return [...prevValue, newFile]
   });
  })
 };

 const handleRemoveFile = (file) => {
  // Filter media items based on image url
  const newFiles = uploadedFiles.filter(img => Object.keys(img)[0] !== Object.keys(file)[0])
  setUploadedFiles(newFiles)
 }
 return (
  <div className='media-upload-container'>
   <Button onClick={handleClick}>Upload Photos</Button>
   <input type="file"
    accept='image'
    multiple
    ref={hiddenFileInput}
    onChange={handleFileChange}
    style={{ display: 'none' }}
   />
   {uploadedFiles.length > 0 && (
    <div className='gallery-preview'>
     <p>Gallery Preview:</p>
     <section className="gallery">
      {uploadedFiles.map(file => {
       return (
        <figure key={Object.keys(file)[0]}>
         <div className="close" onClick={() => handleRemoveFile(file)}>&#10006;</div>
         <img loading='lazy' src={Object.keys(file)[0]} alt={Object.values(file)[0].name} />
        </figure>
       )
      })}
     </section>
    </div>
   )}
  </div>
 )
}

export default NewVehicleMedia