import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App
