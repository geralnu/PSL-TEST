import React from 'react';
import './Insights.css';

const Insights = (props) => {

    const {name} = props;
    return (
        <div className={name} id="insights_psl">
            <div className="insights__wrapper">
                <div className="insights_content">
                    <h3 className="insights_title">Insights</h3>
                    <h4 className="insights_subtitle">Technology and Outsourcing Insights from the Experts</h4>
                </div>
                <div className="insights_items-wrapper">
                    <p className="insights_text">
                        Get the latest Insights from the PSL community on trending topics in technology, outsourcing and software development. 
                    </p>
                    <div className="insights_items">
                        <a href="https://www.pslcorp.com/resources/blog">Blog</a>
                        <a href="https://www.pslcorp.com/documents/ebook-outsource_vs_offshore.pdf" target="blank">E-books</a>
                        <a href="https://www.pslcorp.com/resources/case-studies">Case Studies</a>
                        <a href="#/insights">Whitepapers</a>
                        <a href="https://www.pslcorp.com/resources/news">News</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Insights;
