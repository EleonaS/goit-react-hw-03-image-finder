import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
//import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
//import { IconContext } from "react-icons";

/*import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}*/

export class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    const query = e.currentTarget.value;
    this.setState({ query });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.query.trim() === ''
    ) {
      toast.info(
        'Рlease ENTER CORRECT NAME',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
      return;
    }
    this.props.onSubmit(
      this.state.query,
    );
    this.resetState();
  };

  resetState = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm
          onSubmit={this.handleSubmit}
        >
          <Button type="submit">
            <ButtonLabel>
              Search
            </ButtonLabel>
          </Button>

          <SearchFormInput
            value={this.state.query}
            onChange={
              this.handleInputChange
            }
            placeholder="Search images"
            type="text"
            autoComplete="off"
            autoFocus
          />
        </SearchForm>
      </Header>
    );
  }
}
