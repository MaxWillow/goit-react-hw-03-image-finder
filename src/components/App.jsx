import React, { Component } from 'react';
import styles from './App.module.css';
import * as API from '../services/api';
import Searchbar from './Searchbar/Searchbar';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import LoaderDots from './LoaderDots/LoaderDots';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    searchQuery: '',
    pageNumber: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.onSearch(searchQuery, pageNumber);
    }
  }

  onSubmitSearchbar = text => {
    this.setState({
      searchQuery: text,
      items: [],
    });
  };

  onSearch = (searchQuery, pageNumber) => {
    const { scrollHeight } = document.documentElement;

    this.setState({
      isLoading: true,
    });

    API.fetchImages(searchQuery, pageNumber)
      .then(res =>
        this.setState(prevState => ({
          items: [...prevState.items, ...res.data.hits],
        })),
      )
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        window.scrollTo({
          top: scrollHeight,
          behavior: 'smooth',
        });

        this.setState({
          isLoading: false,
        });
      });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  render() {
    const { items, isLoading, error } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitSearchbar} />
        {error && <ErrorNotification text={error.message} />}
        <ImageGallery pictures={items} />
        {isLoading && <LoaderDots />}
        {items.length > 0 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
