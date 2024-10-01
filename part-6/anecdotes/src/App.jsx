import './App.css';
import AnecdoteForm from './components/AnecdoteForm';
import Anecdotes from './components/Anecdotes';

const Header = () => {
  return <h3>Anecdotes</h3>;
};


const App = () => {
  return (
    <main className="App">
      <Header />
      <Anecdotes />
      <AnecdoteForm />
    </main>
  );
};

export default App;
