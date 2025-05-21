"use client"

const ArticlesComponent = ({articles}) => {

    const generateUrl = (article_url) => {
        return `${article_url.replace(`https://www.astroved.com`, "")}`;
      };
      if (!articles) {
        return <div>No articles available.</div>;
      }
    return(
    <div className="new-panel yellow-bg">
  <div className="container">
    <div className="dailyhorosope_sec">
        <div className="left-panel">
    
      <h3> Recent Articles</h3>
      <div className="left-panel">
 {articles.slice(0,2).map((post,index)=>(
 <div key={index}>
 <a href={generateUrl(post.article_url)}>
<img src={post.image_url} title="Aries November 2024 Monthly Horoscope Predictions | Aries November 2024 Horoscope" alt="Aries November 2024 Monthly Horoscope Predictions | Aries November 2024 Horoscope"/>
<p className="title">{post.title} </p> 

</a>
<p>{post.summary.length > 100 ? `${post.summary.substring(0, 100)}...` : post.summary}<br/> 
<a href={generateUrl(post.article_url)}>Read More</a></p>
</div>
))}
</div>
<div className="right-panel">
{articles.slice(1,3).map((post,index)=>(
  <div key={index}>
 <a href={generateUrl(post.article_url)} >
<img src={post.image_url} title="Aries November 2024 Monthly Horoscope Predictions | Aries November 2024 Horoscope" alt="Aries November 2024 Monthly Horoscope Predictions | Aries November 2024 Horoscope"/>
<p className="title">{post.title} </p> 

</a>
<p>{post.summary.length > 100 ? `${post.summary.substring(0, 100)}...` : post.summary}<br/> 
<a href={generateUrl(post.article_url)}>Read More</a></p>
</div >
))} 
</div>

    

  </div>
</div>
  </div>
</div>
   


    
    )
}

export default ArticlesComponent;