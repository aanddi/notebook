import { PrimeReactProvider } from 'primereact/api'
import ReactDOM from 'react-dom/client'

import './styles/global.scss'

import Home from './components/screen/Home/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <Home />
  </PrimeReactProvider>
)
