import './employees-list-item.css';

import { Component } from 'react';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: 'like',
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
      like: this.state.like === 'like' ? 'liked' : 'like',
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
      classNames += ' increase';
    }

    if (like === 'liked') {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.like}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;