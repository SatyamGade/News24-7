import React, {useContext, useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import ModeContext from '../context/mode/ModeContext';

function News(props) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState();
    const a = useContext(ModeContext);

    const fetchNews = async () => {
        props.setProgress(10);
        const load = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2064135e54fb0d8c291619bac995c28c24f00&language=en&category=${props.category}&country=in`);

        props.setProgress(40);
        const data = await load.json();
        props.setProgress(70);
        setArticles(data.results);
        props.setProgress(100);
        setPage(data.nextPage);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const load = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2064135e54fb0d8c291619bac995c28c24f00&language=en&category=${props.category}&page=${page}&country=in`);

        props.setProgress(40);
        const data = await load.json();
        props.setProgress(70);
        setArticles(articles.concat(data.results));
        props.setProgress(100);
        setPage(data.nextPage);
    }

    useEffect(() => {
        document.title = `News24/7 -${props.category==="business,technology,sports,health,entertainment"? "General" : firstLetterToUp(props.category)} Headlines`;
        fetchNews();
        // eslint-disable-next-line
    }, [])

    const firstLetterToUp = (word)=>{
        return word[0].toUpperCase() + word.substring(1);
    }

    return (
        <div className={`${a.mode==="dark"?"bg-dark":""}`}>
            <h2 className={`text-center ${a.mode==="dark"?"text-light":""}`} style={{ paddingBottom: '35px', paddingTop: '90px' }}>Top {props.category === "business,technology,sports,health,entertainment" ? "General" : firstLetterToUp(props.category)} Headlines</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={updateNews}
                hasMore={articles.length !== 30}
                loader={<Spinner />}
                endMessage={
                    <p className={`text-center ${a.mode === "dark"?"text-light":""}`}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className={`container`}>
                    <div className={`row`}>
                        {articles.map((element, index) => {
                            return <div key={index} className={`col-md-4`}>
                                <NewsItem key={index} title={element.title ? element.title : "Title not available"} description={element.description ? element.description.substring(0, 160) + "..." : "Description not available..."} image_url={element.image_url ? element.image_url : "https://picsum.photos/200"} link={element.link} pubDate={element.pubDate ? element.pubDate : "Recent"} creator={element.creator ? element.creator : "Unknown"} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default News
