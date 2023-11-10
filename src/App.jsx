import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import NotFoundPage from './components/Main/Other/NotFoundPage'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import DetailPage from './components/Main/DetailPage/DetailPage'
import RootLayout from './components/Main/RootLayout'
import SearchResultPage from './components/Main/Other/SearchResultPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />}/>
      <Route path="/searchPage/:searchTerm" element={<SearchResultPage />}/>
      <Route path="/searchPage/" element={<Main />}/>
      <Route path="/detailPage/:id" element={<DetailPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router}/> 
  );
}

export default App
