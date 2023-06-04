import { Header } from './components/Header/Header'
import {Post} from './components/post/Post'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='post-component'>
      <Post />
      </div>
    </>
  )
}

export default App
