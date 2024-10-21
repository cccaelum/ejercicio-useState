import './App.css'
import {useState} from 'react';

function App() {
    // variables de estado
  const [name, setName] = useState('Sofía');  
  const [newName, setNewName] = useState(''); 

  // para actualizar el nombre cuando se haga clic en un <li>
  const cambiarNombre = (nuevoNombre) => {
    setName(nuevoNombre);
  };

  // Bonus
  const changeName = (e) => {
    e.preventDefault(); 

    if (newName.trim() !== '') {
        setName(newName);   // actualiza el nombre con el valor del input
        setNewName('');     // limpia el input
      }
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2> 
      <ul>
        <li onClick={() => cambiarNombre('Data')}>Data</li>
        <li onClick={() => cambiarNombre('Reyes')}>Reyes</li>
        <li onClick={() => cambiarNombre('Soraya')}>Soraya</li>
      </ul>
    <form onSubmit={changeName}>
      <input 
        type="text" 
        value={newName}  
        onChange={(e) => setNewName(e.target.value)}  
        placeholder="Add a name"
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );

}

export default App
