import ContainCard from './components/Main-Card/ContainCard'
import { ThemeProvider } from '@mui/material/styles'
import theme from './themeConfig'
import Footer from './components/Footer/Footer'
import ContainerMenuBar from './components/Nav-Cart/ContainerMenuBar'
import DetailCard from "./components/Main-Card/DetailCard"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import LocalMallContextProvider from './context/LocalMallContext'
import ContainerDetailCart from './components/Nav-Cart/ContainerDetailCart'
import InfoBuy from './components/Buy/InfoBuy'
import PaymentMethods from './components/Buy/PaymentMethods'
import { Auth0Provider } from "@auth0/auth0-react";
import FinishBuy from './components/Buy/FinishBuy'




function App() {
  
  return (
    <ThemeProvider theme={theme} >
      
      <Auth0Provider
    domain= {import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <LocalMallContextProvider>
      <BrowserRouter >
      <ContainerMenuBar/>
    
      <Routes>
       <Route path='/' element={ <Home  />} />
       <Route path='/category/:nameCategory' element={ <ContainCard  />} />
       <Route path='/category/:nameCategory/:section' element={ <ContainCard  />} />
       <Route  path='/DetailCard/:nameCategory/:id'  element={ <DetailCard />}/>
       <Route path='*' element={ <NotFound />} />
       <Route path='/DetailCart' element={ <ContainerDetailCart />} />
       <Route path='/infoBuy' element={ <InfoBuy  />} />
       <Route path='/infoBuy/:method' element={ <PaymentMethods />} />
       <Route path='/finishBuy' element={ <FinishBuy /> } />
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      </LocalMallContextProvider>
      </Auth0Provider>
    </ThemeProvider>
  )
}

export default App
