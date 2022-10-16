import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticlesList = ({articles}) => {

    return(
        <>
            <h1>Article</h1>
            <ArticlesList articles={articles}/>
        </>
    )
}

export default ArticlesList;