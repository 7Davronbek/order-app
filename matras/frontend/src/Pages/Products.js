import React, { useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mattressType, setMattressType] = useState('');
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sizes, setSizes] = useState([{ width: '', length: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('mattressType', mattressType);
    formData.append('file', file);

    sizes.forEach((size, index) => {
      formData.append(`sizes[${index}].width`, size.width);
      formData.append(`sizes[${index}].length`, size.length);
    });

    try {
      await axios.post('/api/mattresses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSizeAdd = () => {
    setSizes([...sizes, { width: '', length: '' }]);
  };

  const handleSizeRemove = (index) => {
    const newSizes = [...sizes];
    newSizes.splice(index, 1);
    setSizes(newSizes);
  };

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...sizes];
    newSizes[index][field] = value;
    setSizes(newSizes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <label>
        Mattress Type:
        <input
          type="text"
          value={mattressType}
          onChange={(e) => setMattressType(e.target.value)}
        />
      </label>
      <label>
        File:
        <input
          type="file"
          onChange={handleFileChange}
        />
      </label>
      {imagePreview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}
      <h3>Sizes</h3>
      {sizes.map((size, index) => (
        <div key={index}>
          <label>
            Width:
            <input
              type="text"
              value={size.width}
              onChange={(e) => handleSizeChange(index, 'width', e.target.value)}
            />
          </label>
          <label>
            Length:
            <input
              type="text"
              value={size.length}
              onChange={(e) => handleSizeChange(index, 'length', e.target.value)}
            />
          </label>
          <button type="button" onClick={() => handleSizeRemove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleSizeAdd}>
        Add Size
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Products;