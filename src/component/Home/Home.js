import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBook } from '../../redux/action/bookAction';
import './Home.css';


const Home = () => {
  const bookData = useSelector((state) => {
    return state.books.booksList;
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook())
  }, [])

  return (
    <div className="home container" style={{ width: '90vw' }}>
      <h1 className="text-center text-secondary py-5" >The Book Land</h1>
      <div className="row d-flex justify-content-center px-4 py-5">
        {
          bookData?.map((item, index) => {
            return (
              <div className="col-md-5" key={index} style={{ cursor: "pointer" }}>
                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src={item.img} class="img-fluid rounded-start" alt="..." style={{ width: "100%", objectFit: "contain" }} />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.author}</p>
                        <p class="card-text"><small class="text-muted">$ {item.price}</small></p>
                        <Link to={`/book/${item.id}`} style={{ color: 'black' }}>Details...</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default Home
