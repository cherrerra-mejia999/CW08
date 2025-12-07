import React from 'react';
import './app.css';
import HelloWorld from './helloworld';
import Counter from './counter';
import FilteredList from './filteredlist';

function App() {
  const produce = [
    { name: 'Apple', type: 'Fruit' },
    { name: 'Banana', type: 'Fruit' },
    { name: 'Orange', type: 'Fruit' },
    { name: 'Strawberry', type: 'Fruit' },
    { name: 'Mango', type: 'Fruit' },
    { name: 'Pineapple', type: 'Fruit' },
    { name: 'Carrot', type: 'Vegetable' },
    { name: 'Broccoli', type: 'Vegetable' },
    { name: 'Spinach', type: 'Vegetable' },
    { name: 'Tomato', type: 'Vegetable' },
    { name: 'Potato', type: 'Vegetable' },
    { name: 'Lettuce', type: 'Vegetable' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React CW08</h1>
      </header>
      
      <main className="main-content">
        <section className="component-section">
          <HelloWorld name="Student" />
        </section>

        <section className="component-section">
          <Counter />
        </section>

        <section className="component-section">
          <FilteredList items={produce} />
        </section>
      </main>

      <footer className="App-footer">
        <p>Web Pro 25</p>
      </footer>
    </div>
  );
}

export default App;