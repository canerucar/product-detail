//Swiper component
import Swiper from './components/swiper';

//React required states
import { useEffect } from 'react';

//Button component
import Button from './components/button';

import { getProductTitleAsync, selectableAttributesAsync } from './api/requests/index';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductTitleAsync());
    dispatch(selectableAttributesAsync());
  }, [dispatch]);

  function handleColor(color) {
    console.log(color);
  }

  function handleSize(size) { 
    console.log(size);
  }
  
  if (product.size == 0 || product.color == 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-detail-content-left">
        <Swiper />
        </div>
        <div className="product-detail-content-right">
          <div className="title">
            <h1>{product.title && product.title}</h1>
            <span>23 yorum</span>
          </div>
          <div className="subtitle">
            <h4>3.000 TL - 3.300 TL </h4><span>/ Adet</span>
            <div>100 Adet (minimum Sipariş Adedi)</div>
          </div>
          <div className="memory-color">
            <div className="memory">
              <div className="memory-title">{product.color.name} :</div>
              {product.color.values.map((color, index) =>
                <div key={index}>
                  <label htmlFor="one">{color}</label>
                  <input type="radio" id="one" name="color" value={color} onClick={()=>handleColor(color)} />
                </div>
              )} 
            </div>

            <div className="memory color">
              <div className="memory-title">{product.size.name} :</div>
              {product.size.values.map((size, index) =>
                <div key={index}>
                  <label htmlFor="one-size">{size}</label>
                  <input type="radio" id="one-size" name="size" value={size} onClick={()=>handleSize(size)}  />
                </div>
                
              )} 
            </div>

            <div className="total-piece">
              <div className="total">
                <div className="title">Toptan Fiyat (Adet) :</div>
                  <div>
                    <label htmlFor="one-total">100-199</label>
                    <input type="radio" id="one-total" name="total" value="1" />
                  </div>
                  <div>
                    <label htmlFor="two-total">200-299</label>
                    <input type="radio" id="two-total" name="total" value="2" />
                  </div>
                  <div>
                    <label htmlFor="three-color">300-399</label>
                    <input type="radio" id="three-total" name="total" value="3" />
                  </div>
                  <div>
                    <label htmlFor="three-color">500-699</label>
                    <input type="radio" id="three-total" name="total" value="4" />
                </div>
              </div>

              <div className="piece">
                <div className='piece-left'>Adet :</div>
                <div className='piece-center'>
                  <input type="number" min="1" />
                  <span>Adet</span>
                </div>
                <div className='piece-right'>Stok adedi: 500</div>
              </div>

              <div className='total-b'>
                <div className='total-b-left'>Toplam :</div>
                <div className='total-b-center'>
                  <div className='total-b-center-title'>300.000, TL</div>
                  <div className='total-b-center-cargo'>Kargo Ücreti : alıcı öder</div>
                  <div className='total-b-center-basket'>
                    <Button name="SEPETE EKLE" disable={product.button} />
                  </div>
                </div>
                <div className='total-b-right'>
                  Ödeme Seçenekleri
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App