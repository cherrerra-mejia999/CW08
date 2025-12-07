import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul className="produce-list">
        {this.props.items.map((item, index) => (
          <li key={index} className="produce-item">
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;