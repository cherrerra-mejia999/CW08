import React from 'react';
import List from './list';
import { Dropdown } from 'react-bootstrap';

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'All'
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  onFilter = (type) => {
    this.setState({ type: type });
  };

  filterItem = (item) => {
    // First check if item matches search
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    
    // Then check if item matches type filter
    const matchesType = this.state.type === 'All' || item.type === this.state.type;
    
    // Return true only if both conditions are met
    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem).map(item => item.name);

    return (
      <div className="filtered-list-container">
        <h2>Produce List</h2>
        
        <div className="filter-controls">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={this.onSearch}
            className="search-input"
          />
          
          <Dropdown onSelect={this.onFilter}>
            <Dropdown.Toggle variant="primary" id="type-dropdown">
              Type: {this.state.type}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
              <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;