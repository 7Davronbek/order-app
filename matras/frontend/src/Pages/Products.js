import axios from "axios";
import React, { useState } from "react";

export default function Products() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mattressType, setMattressType] = useState("");
  const [file, setFile] = useState(null);
  const [sizes, setSizes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("mattressType", mattressType);
    formData.append("file", file);

    sizes.forEach((size, index) => {
      formData.append(`sizes[${index}].size`, size.width);
      formData.append(`sizes[${index}].price`, size.length);
    });

    try {
      await axios.post(
        "http://localhost:8080/api/v1/admin/mattress",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error);
    }
  };

  const handleSizeAdd = () => {
    setSizes([...sizes, { width: "", length: "" }]);
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
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </label>
      <h3>Sizes</h3>
      {sizes.map((size, index) => (
        <div key={index}>
          <label>
            Width:
            <input
              type="text"
              value={size.width}
              onChange={(e) => handleSizeChange(index, "width", e.target.value)}
            />
          </label>
          <label>
            Length:
            <input
              type="text"
              value={size.length}
              onChange={(e) =>
                handleSizeChange(index, "length", e.target.value)
              }
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleSizeAdd}>
        Add Size
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
