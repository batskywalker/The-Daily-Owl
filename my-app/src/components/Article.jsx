import './Article.css';

function Article(props) {
    return (
        <div id="article">
            <img src={props.image} alt="Mikie in front of town hall" width="539px"/>
            <h2>{props.heading}</h2>

            <p>{props.paragraph_one}</p>

            <div id="float-quote">
                <h3>{props.quote_block}</h3>
            </div>

            <p>{props.paragraph_two}</p>
        </div>
    );
}

export default Article;