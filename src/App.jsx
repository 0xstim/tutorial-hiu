import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products))
  }, [])
  // let count = 0
  
  function handleClick() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "black" }}>Tutorial tại HIU</h1>
      <h2 className="description">Một app viết bằng ReactJS</h2>
      <p>Ngày hôm nay đẹp trời</p>
      <h2>Điểm danh</h2>
      <button onClick={handleClick}>Đếm số người</button>
      <p>Số người: {count}</p>
      <button onClick={() => setIsShow(!isShow)}>Bình luận</button>
      {isShow && <p>Đây là bình luận</p>}
      <h2>Sản phẩm</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
       ))
      }    
    </> 
  )
}

export default App
