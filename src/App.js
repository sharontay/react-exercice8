import './App.css'
import TodosContainer from './components/containers/TodosContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function App() {
    return (
        <div className="App">
            <TodosContainer />
            <TodoFormContainer />
            <FilterOptions />
        </div>
    )
}

export default App
