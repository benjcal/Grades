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
        this.select = this.select.bind(this)
    }
    
    search(e) {
        this.setState({value: e.target.value})
    }

    select(id, category) {
        if (category === 'course') {
            store.selectCourse(id)
        }
        this.setState({value: ''})
    }

    render() {
        // eslint-disable-next-line
        let courses = store.courses.values().filter(n => {
            if (n.name.toLowerCase().toLowerCase().includes(this.state.value)) {
                return n
            }
        })

        // eslint-disable-next-line
        let students = store.students.values().filter(n => {
            if (n.first.toLowerCase().includes(this.state.value) | n.last.toLowerCase().includes(this.state.value)) {
                return n
            }
        })

        // eslint-disable-next-line
        let activities = store.students.values().filter(n => {
            if (n.first.toLowerCase().includes(this.state.value) | n.last.toLowerCase().includes(this.state.value)) {
                return n
            }
        })

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

                            {courses.length > 0 && <div className="category">COURSES:</div>}
                            {courses.map(j => 
                                <div
                                    className="result"
                                    onClick={() => {this.select(j.id, 'course')}}
                                    key={j.id}>{j.name}</div>    
                            )
                            }

                            {students.length > 0 && <div className="category">STUDENTS:</div>}
                            {   // eslint-disable-next-line
                                students.map(j => 
                                <div className="result" key={j.id}>{j.first} {j.last}</div>
                            )
                            }

                            {activities.length > 0 && <div className="category">ACTIVITIES:</div>}
                            {   // eslint-disable-next-line
                                activities.map(j => 
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