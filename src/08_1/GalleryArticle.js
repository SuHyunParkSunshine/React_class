import style from './Gallery_1.module.css';

const GalleryArticle = ({ item }) => {
    let tags = item.galSearchKeyword.split(',');
    tags = tags.map((i) =><div className={style.tags} key={'tag' + i}>{i}</div>)

    return (
        <>
            <article>
                <header>
                    <h2>{item.galTitle}</h2>
                    <span>{item.galPhotographyLocation}</span>
                </header>
                <div>
                    <img src={item.galWebImageUrl} />
                </div>
                <footer>
                   {tags}
                </footer>
            </article>
        </>
    );

}
export default GalleryArticle;