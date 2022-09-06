//Swiper component
import Swiper from './components/swiper';

//React required states
import { useEffect } from 'react';

//Button component
import Button from './components/button';

import { getProductTitleAsync, selectableAttributesAsync } from './api/requests/index';
import { handleSelect, handleSize, handleButton, closeModal } from './redux/product/productSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductTitleAsync());
    dispatch(selectableAttributesAsync());
  }, [dispatch]);
  
  useEffect(()=>{
    product.items.length > 0 &&  dispatch(handleSelect(product.items[0]?.attributes?.[1]?.value))
  }, [product.items])
  
  console.log('product', product.items);

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
                  <label htmlFor={color}>{color}</label>
                  <input type="radio" id={color} name="color" value={color} onClick={()=>dispatch(handleSelect(color))} />
                </div>
              )} 
            </div>

            <div className="memory color">
              <div className="memory-title">{product.size.name} :</div>
              {product.itemsSelectedSize?.map((size, index) =>
                <div key={index}>
                  <label htmlFor={size?.size}>{size?.size}</label>
                  <input type="radio" id={size?.size} name="size" value={size?.size} onClick={()=>dispatch(handleSize(size?.size))}  />
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
                    <Button name="SEPETE EKLE" click={() => dispatch(handleButton())} disable={product.button} />
                  </div>
                </div>
                <div className='total-b-right'>
                  Ödeme Seçenekleri
                </div>
              </div>
                {product.modal &&
                  <div className="modal-overlay">
                    <div className="modal">
                      <div>
                        Color : {product?.selectColor}
                      </div>
                      <div>
                        Size : {product?.selectSize}
                      </div>
                    <span className="modal-close" onClick={()=> dispatch(closeModal())}>&#10005;</span>
                    </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App