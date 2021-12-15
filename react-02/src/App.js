import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Begin React' />
      <Todo text='Do some projects' />
      <Todo text='Finish-up React' />
      <Modal />
      <Backdrop />
    </div>
  );
}
export default App;
