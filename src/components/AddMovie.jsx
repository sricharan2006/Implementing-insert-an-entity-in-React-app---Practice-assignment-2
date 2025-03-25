import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddMovie() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-movie">
      <h1>Add a New Movie</h1>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} />
        <select name="genre" onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange}></textarea>
        <input type="url" name="posterUrl" placeholder="Poster Image URL" onChange={handleChange} />
        
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}

export default AddMovie;
