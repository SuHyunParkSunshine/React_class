import style from './Gallery.module.css';

const GalleryView = ({ data }) => {

    console.log('viewdata = ', data);

    const showData = data.map((data, idx) =>
        <article className="donno" key={'head' + idx}>
            <div className={style.head} >
                <h2 className="title">{data.galTitle}</h2>
                <p>{data.galPhotographyLocation}</p>
            </div>
            <img src={data.galWebImageUrl}></img>
            <p className={style.kword}>{data.galSearchKeyword}</p>

        </article>
    );


    return (
        <div>
            <div>
                {showData}
            </div>            
        </div>

    );
}
export default GalleryView;