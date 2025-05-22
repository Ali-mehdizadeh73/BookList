import React, { Component } from 'react'
import { IoBookOutline } from "react-icons/io5";

export default class Header extends React.Component {
  render() {
    return (
        <h1 className="display-4 text-center">
        <IoBookOutline className='icon'/>
        <i className="fas fa-book-open text-warning">

        </i>Library
        <span className="text-warning">Book</span>List
    </h1>
    )
  }
}

