import React, { Component } from 'react'
import Book from './Book'
import './AddForm.css'



export default class AddForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            books: [],

            title : "",
            author: "",
            year: ""
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)

    }

    // submitHandler(event) {
    //     event.preventDefault()

    //     if (this.state.title.length !== 0 && this.state.author.length !== 0 && this.state.year.length !== 0) {
    //         this.setState((prevState) => ({
    //             books: [...prevState.books, {title: this.state.title, author: this.state.author, year: this.state.year}],
    //             title: "",
    //             author: "",
    //             year: ""
    //         }))
    //     }
    // }

    submitHandler(event) {
        event.preventDefault()

        let {title, author, year} = this.state

        if (title && author && year) {

            let newBook = {
                id : this.state.books.length +1 ,
                title,
                author,
                year
            }

            this.setState({
                books: [...this.state.books, newBook]
            })

            this.setState({
                title: "",
                author: "",
                year: ""
            })
        }
    }

    titleHandler (event) {
        this.setState({
            title: event.target.value
        })
        console.log(event)
    }
    authorHandler (event) {
        this.setState({
            author: event.target.value
        })
        console.log(event)
    }
    yearHandler (event) {
        this.setState({
            year: event.target.value
        })
        console.log(event)
    }


  render() {
    return (
      <>
        <form onSubmit={this.submitHandler} >
            <div>
                <lable>Title</lable>
                <input value={this.state.title}  onChange={this.titleHandler} type='text' id='title'></input>
            </div>
            <div>
                <lable>Author</lable>
                <input value={this.state.author} onChange={this.authorHandler} type='text' id='Author'></input>
            </div>
            <div>
                <lable>Year</lable>
                <input value={this.state.year} onChange={this.yearHandler} type='text' id='Year'></input>
            </div>

            <input type='submit' value="Add Book"></input>
        </form>
        <table>
            <thead>
                <tr>
                    <th className='title-item'>Title</th>
                    <th className='title-item'>Author</th>
                    <th className='title-item'>Year</th>
                </tr>
            </thead>
                <tbody id="book-list">
                    {this.state.books.map((book) => (
                        <Book id="book-list" {...book} key={book.id}></Book>
                    ))}
                </tbody>
        </table>
      </>
    )
  }
}