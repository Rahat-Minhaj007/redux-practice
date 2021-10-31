import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { addBook } from "../../redux/action/bookAction";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookData = useSelector((state) => {
    return state.books.booksList;
  })
  const bookDetail = bookData.find((item) => parseInt(item?.id) === parseInt(id))
  const { name, author, description, img } = bookDetail;
  const handleAddBook = (book) => {
    dispatch(addBook(book));

  }
  return (
    <div className="container px-4" style={{ padding: "80px 0px" }}>
      <div className="row d-flex justify-content-center ">
        <div className="col-md-5">
          <img src={img} alt="bookImage" style={{ width: '70%', objectFit: 'contain' }} />
        </div>
        <div className="col-md-5">
          <h4>{name}</h4>
          <h5>{author}</h5>
          <p >{description}</p>
          <button className="btn btn-primary" onClick={() => handleAddBook(bookDetail)}>ADD-TO-READ</button>
        </div>
      </div>

    </div>
  )
}

export default BookDetail
