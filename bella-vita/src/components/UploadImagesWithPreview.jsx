import React, {useState} from 'react';

const UploadImagesWithPreview = () => {
    const [images, setImages] = useState([null]);

    const handleImageChange = (e, index) => {
        const files = Array.from(e.target.files);
        const updatedImages = [...images];
        updatedImages[index] = files[0];
        setImages(updatedImages);
    };

    const handleAddInput = () => {
        if (images.every((image) => image !== null)) {
            setImages([...images, null]);
        }
    };
    const handleUpload = () => {
        const formData = new FormData();

        images.forEach((image, index) => {
            if (image) {
                formData.append(`images`, image[index]);
            }
        });

        // Append other form fields to the formData object if needed
        // formData.append('fieldName', fieldValue);

        // Perform the upload request using formData
        // Example using fetch API:
        // fetch('/upload-url', {
        //   method: 'POST',
        //   body: formData
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     // Handle the response data
        //   })
        //   .catch(error => {
        //     // Handle any errors
        //   });
    };

    return (
        <div>
            {images.map((image, index) => (
                <div key={index}>
                    <input type="file" onChange={(e) => handleImageChange(e, index)}/>
                    <img src={image ? URL.createObjectURL(image) : ''} alt="Preview"/>
                </div>
            ))}

            <button onClick={handleAddInput} disabled={images.every((image) => image === null)}>
                Add Image
            </button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadImagesWithPreview;