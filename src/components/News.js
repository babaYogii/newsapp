import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: this.articles,
        //     loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2021-12-18&sortBy=publishedAt&apiKey=7c4f43885edf4481ba4ddf1aff7dcd1b";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        console.log(parsedData)
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>News monkey</h2>
                <div className='row'>
                    {console.log(this.state.articles)}
                    {/* {this.state.articles.map((element) => {
                        console.log(element)
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.tittle.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToIamge} newsUrl={element.url} />
                        </div>

                    })} */}
                </div>
            </div>
        )
    }
}
