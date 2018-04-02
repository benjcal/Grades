import React, { Component } from 'react'
import SearchIcon from 'react-icons/lib/md/search'
import store from 'store/store'

class Header extends Component {
    constructor(props) {
        super(props)


        this.state = {
            value: ''
        }

        this.search = this.search.bind(this)
    }
    
    search(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <header>
                <div className='search'>
                    <div className="search-input">
                        <SearchIcon />
                        <input
                            type='text'
                            placeholder='Search for a course, student or assignment'
                            value={this.state.value}
                            onChange={this.search}
                            />
                    </div>
                    {this.state.value.length > 0 &&
                        <div className="search-results">

                            <div className="category">COURSES:</div>
                            {   // eslint-disable-next-line
                                store.courses.values().filter(n => {
                                if (n.name.toLowerCase().toLowerCase().includes(this.state.value)) {
                                    return n
                                }
                            }).map(j => 
                                <div className="result" key={j.id}>{j.name}</div>    
                            )
                            }

                            <div className="category">STUDENTS:</div>
                            {   // eslint-disable-next-line
                                store.students.values().filter(n => {
                                if (n.first.toLowerCase().includes(this.state.value) | n.last.toLowerCase().includes(this.state.value)) {
                                    return n
                                }
                            }).map(j => 
                                <div className="result" key={j.id}>{j.first} {j.last}</div>
                            )
                            }

                            <div className="category">ACTIVITIES:</div>
                            {   // eslint-disable-next-line
                                store.activities.values().filter(n => {
                                if (n.name.toLowerCase().includes(this.state.value)) {
                                    return n
                                }
                            }).map(j => 
                                <div className="result" key={j.id}>{j.name}</div>
                            )
                            }

                        </div>
                    }
                    
                </div>
                
                <div className="right">
                </div>
            </header>
        )
    }
}

export default Header