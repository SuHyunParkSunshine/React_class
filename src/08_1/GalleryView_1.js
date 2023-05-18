import style from './Gallery_1.module.css';
import GalleryArticle from "./GalleryArticle";

const GalleryView_1 = ({ content }) => {
    console.log("GalleryView", content);

    const tags = [];

    for (let i = 0; i < content.length; i = i + 2) {
        console.log("i", i);
        tags.push(
            <div className="grid" key={'div' + i}>
                <GalleryArticle item={content[i]} />
                {(i + 1 < content.length) &&
                    <GalleryArticle item={content[i + 1]} />
                }
            </div>
        );
    }
    return (
        <>
            {tags}
        </>
    );

}
export default GalleryView_1;