import articleListStyle from '../styles/articleList.module.css'
import ArticleItem from './articleItem'

const ArticleList = ({articles}) => {
    return (
        <div className={articleListStyle.grid}>
            {articles.map((articleItem) => (
                    <ArticleItem article={articleItem}/>
                ))}
        </div>
    )
}

export default ArticleList