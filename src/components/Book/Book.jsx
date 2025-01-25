import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category ,rating, totalPages} = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="py-8 rounded-2xl bg-blue-200">
                    <img
                        src={image}
                        className="h-[166px] "
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4">
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-200 text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;