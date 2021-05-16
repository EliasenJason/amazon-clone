export default function Rating({rating, numReviews}) {
    const fullStar = <span><i className="fas fa-star"></i></span>
    const halfStar = <span><i className="fas fa-star-half-alt"></i></span>
    const emptyStar = <span><i className="far fa-star"></i></span>

    return (
        <div className="rating">
            {rating >= 1 ? fullStar : rating >= .5 ? halfStar : emptyStar}
            {rating >= 2 ? fullStar : rating >= 1.5 ? halfStar : emptyStar}
            {rating >= 3 ? fullStar : rating >= 2.5 ? halfStar : emptyStar}
            {rating >= 4 ? fullStar : rating >= 3.5 ? halfStar : emptyStar}
            {rating >= 5 ? fullStar : rating >= 4.5 ? halfStar : emptyStar}
            <span>{`${numReviews} reviews`}</span>
        </div>
    )
}