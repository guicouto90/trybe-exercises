import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayExercicio = ['Acordar as 6', 'Meditar', 'Treinar', 'Estudar', 'Operar na bolsa'];

function App() {
  return (
    arrayExercicio.map((array) => {
      return Task(array);
    })
  );
}

export default App;
