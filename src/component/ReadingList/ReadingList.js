import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBook } from '../../redux/action/bookAction';



const ReadingList = () => {
  const dispatch = useDispatch();

  const readingBookData = useSelector((state) => {
    return state.books.addedBook;
  })

  const handleFinished = (id) => {
    const updatedRedingList = readingBookData.filter((book) => book.id != id)
    dispatch(removeBook(updatedRedingList));

  }
  return (
    <div className="home container" style={{ width: '90vw' }}>
      <h1 className="text-center text-secondary py-5" >Reading List</h1>
      <div className="row d-flex justify-content-center px-4 py-5">
        {
          readingBookData?.map((item, index) => {
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
                        <button className="btn btn-danger" onClick={() => handleFinished(item?.id)}>Finished</button>
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

export default ReadingList
