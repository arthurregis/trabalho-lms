import { useState } from 'react'
import './App.css'

import Header from "./components/header/Header"
import Modal from "./components/modal_login/Modal"
import Slider from './components/slider/slider';
import Products from './components/products/Products';
import Footer from "./components/footer/Footer"


function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Header setModalOpen={() => setOpenModal(!openModal)}></Header>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}></Modal>
      <Slider></Slider>
      <div className="most-wanted-text">
        Mais Procurados
      </div>
      <Products></Products>
      <Footer></Footer>
    </div>
  )
}

export default App