const GalleryView = ({ data }) => {

    console.log('viewdata = ', data);

    const showData = data.map((data) =>
        <li className="donno">
            <h1 className="title">{data.galTitle}</h1>
            <img src={data.galWebImageUrl}></img>
        </li>
    );


    return (
        <article>
            <ul>
                {showData}
            </ul>
        </article>
    );
}
export default GalleryView;