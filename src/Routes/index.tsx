import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from '../components/main'

import Create from '../pages/Create'
import NotFound from '../pages/Not-found'

const Routes = () => {
  return (
    <BrowserRouter>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
      <Main/>
      </div>
      <Switch>
        <Route exact path="/" component = {Create}/>
        <Route path ="*" component ={NotFound}/>
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Routes
