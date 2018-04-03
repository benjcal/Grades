import React, { Component } from 'react'
import SearchIcon from 'react-icons/lib/md/search'
import store from 'store/store'
import { observer } from 'mobx-react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            courses: [],
            students: [],
            activities: [],
            selected: 1
        }

        this.search = this.search.bind(this)
        this.select = this.select.bind(this)
        this.arrowKeys = this.arrowKeys.bind(this)
    }
    
    search(e) {    
        this.setState({value: e.target.value})
        this.setState({selected: 0})
        
        // eslint-disable-next-line
        let courses = store.courses.values().filter(n => {
            if (n.name.toLowerCase().includes(e.target.value)) {
                return n
            }
        })
        // eslint-disable-next-line
        let students = store.students.values().filter(n => {
            if (n.first.toLowerCase().includes(e.target.value) | n.last.toLowerCase().includes(e.target.value)) {
                return n
            }
        })
        // eslint-disable-next-line
        let activities = store.activities.values().filter(n => {
            if (n.name.toLowerCase().includes(e.target.value)) {
                return n
            }
        })

        this.setState({courses, students, activities})
    }

    select(id, category) {
        if (category === 'course') {
            store.selectCourse(id)
        }
        if (category === 'student') {
            console.log('student!', id)
        }
        if (category === 'activity') {
            store.setView('course' + store.currentCourse + 'activity')
        }
        this.setState({value: ''})
    }

    arrowKeys(e) {
        if (e.key === 'ArrowDown') {
            this.setState({selected: this.state.selected + 1})
        }
        if (e.key === 'ArrowUp') {
            this.setState({selected: this.state.selected - 1})
        }
        if (e.key === 'Enter') {
            if (this.state.selected < this.state.courses.length) {
                this.select(this.state.courses[this.state.selected].id, 'course')
            }
            if (this.state.selected > this.state.courses.length && this.state.selected < this.state.courses.length + this.state.students.length) {
                this.select(this.state.students[this.state.selected - this.state.courses.length], 'student')
            }
            if (this.state.selected > this.state.courses.length + this.state.students.length) {
                this.select(this.state.students[this.state.selected - this.state.courses.length], 'activity')
            }
            
        }
    }

    render() {
        let { courses, students, activities } = this.state

        return (
            <header>
                <div className='search'>
                    <div className="search-input">
                        <SearchIcon />
                        <input
                            type='text'
                            placeholder='Search for a course, student or assignment'
                            value={this.value}
                            onChange={this.search}
                            onBlur={() => {this.setState({value: ''})}}
                            onKeyDown={this.arrowKeys}
                            ref={(e) => {this.searchElement = e}}
                            />
                    </div>
                    {this.state.value.length > 0 &&
                        <div
                            className="search-results">

                            {courses.length > 0 && <div className="category">COURSES:</div>}
                            {courses.map((j, i) => 
                                <div
                                    className={["result", this.state.selected === i ? 'active' : null].join(' ')}
                                    onClick={() => {this.select(j.id, 'course')}}
                                    key={j.id}>{j.name}</div>    
                            )
                            }

                            {students.length > 0 && <div className="category">STUDENTS:</div>}
                            {   // eslint-disable-next-line
                                students.map((j, i) => 
                                <div
                                    className={["result", this.state.selected === i + courses.length ? 'active' : null].join(' ')}
                                    key={j.id}>{j.first} {j.last}</div>
                            )
                            }

                            {activities.length > 0 && <div className="category">ACTIVITIES:</div>}
                            {   // eslint-disable-next-line
                                activities.map((j, i) => 
                                <div
                                    className={["result", this.state.selected === i + courses.length + students.length? 'active' : null].join(' ')}
                                    key={j.id}>{j.name} {j.id}</div>
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

export default observer(Header)