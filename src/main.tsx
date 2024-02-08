import ReactDOM from 'react-dom/client'
import './styles/Global.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoute from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
     <BrowserRouter>
          <MainRoute />
     </BrowserRouter>
)
