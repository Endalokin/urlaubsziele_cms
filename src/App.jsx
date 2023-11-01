import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import DetailPage from './components/Main/DetailPage/DetailPage'
import RootLayout from './components/Main/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />}/>
      <Route path="/detailPage/:id" element={<DetailPage />}/>
    </Route>

  )
)

function App() {

  return (
    
      <RouterProvider router={router}/>
    
  );
}

export default App
