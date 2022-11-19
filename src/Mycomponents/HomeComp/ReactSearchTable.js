import React from 'react';

// Create a SearchApp Component
class SearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  handleChange(event) {
    // Get event value
    let searchValue = event.target.value;
    // Set the state to trigger a re-rendering
    this.setState({ search: searchValue });
  }
  render() {
    // Filter the table data
    let employees = this.props.data,
      searchString = this.state.search.trim().toLowerCase();

    if (searchString.length > 0) {
      // We are searching. Filter the results.
      employees = employees.filter((e) =>
        e.name.toLowerCase().match(searchString)
      );
    }
    // Set the `update` property of the `UserInput` element
    return (
      <div className='container' style={{marginTop:"100px"}}>
        <UserInput update={(e) => this.handleChange(e)} />
        <Table data={employees} />
      </div>
    );
  }
}
export default SearchApp;

// UserInput component
class UserInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          className="form-control mb-2"
          placeholder="Search Employees..."
          onChange={(e) => this.props.update(e)}
        />
      </div>
    );
  }
}

// Simple TableRow component for showing a <tr>
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.title}</td>
        <td>{this.props.salary}</td>
        <td>{this.props.email}</td>
        <td>
          <a href={`/data/${this.props.id}`}>Details</a>
        </td>
      </tr>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {this.props.data.map(function (d, i) {
              return (
                <TableRow
                  key={"person-" + i}
                  name={d.name}
                  salary={d.salary}
                  title={d.title}
                  email={d.email}
                  id={d.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}



