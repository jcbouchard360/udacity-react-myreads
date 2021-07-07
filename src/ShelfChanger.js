import React from 'react'
import PropTypes from "prop-types";

class ShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    currentStatusCode: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
  }

  state = {
    value : ''
  }

  componentDidMount() {
    this.setState(() => ({
      value : this.props.book.shelf || 'none'
    }))
  }

  change = (e) => {
    let { value } = e.target
    this.setState({value: value})
    this.props.onUpdateBook(this.props.book, value)
  }

  render() {
    return (
        <div className="book-shelf-changer">
          <select onChange={this.change} value={this.state.value}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    )
  }
}

export default ShelfChanger
