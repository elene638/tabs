import React from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {

    const [load, setLoad] = React.useState(true)
    const [portfolio, setPortfolio] = React.useState([])
    const [value, setValue] = React.useState(0)

    const fetchItems = (() => 
         {
            fetch("https://course-api.com/react-tabs-project")
            .then(res => res.json())
            .then(data => setPortfolio(data))
            setLoad(false)
        }
    ) 

    React.useEffect(() => {
        fetchItems()
    }, [])

    if (load) {
        return (
            <div className="main-container">
                <h1>Loading...</h1>
            </div>
        )
    }

    //const { company, dates, duties, title } = portfolio[value]

    const items = portfolio.map((item) => {
            return (
                <div className="job-info">
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.dates}</p>
                    {item.duties.map((duty, index) => {
                        return (
                            <div className="duties">
                                <FaAngleDoubleRight className="fa" />
                                <p key = {index}>{duty}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })

    return (
        <div className="main-container">
            <h1>Experience</h1>
            <hr/>
            <div className="portfolio">
                <div className="jobs-container">
                    <div className="btn-container">
                        {
                            portfolio.map((item, index) => {
                                return <button key={item.id} className={`btn ${index === value && 'active-btn'}`} onClick={() => {
                                    setValue(index)
                                }}>
                                    {item.company}
                                </button>
                            })
                        }
                    </div>
                    <h3>{items[value]}</h3>

                </div>
            </div>
        </div>
    )
}

export default App;