import './App.css';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragandDrop from './Components/DragandDrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragandDrop />
      </div>
    </DndProvider>
  );
}

export default App;
