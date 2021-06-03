import React from 'react';
import { fetchPopularRepositories } from 'services';
import LanguagesNav from './LanguagesNav';
import RepositoriesGrid from './RepositoriesGrid';

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repositories: {},
      errorMsg: null,
    }
  }

  componentDidMount() {
    this.setSelectedLanguage(this.state.selectedLanguage);
  }

  setSelectedLanguage = language => {
    this.setState({
      selectedLanguage: language,
      errorMsg: null,
    });

    if (this.state.repositories[language]) {
      return;
    }

    fetchPopularRepositories(language).then(data => {
      this.setState(({ repositories }) => ({
        repositories: {
          ...repositories,
          [language]: data,
        },
      }));
    }).catch(error => {
      this.setState({ error: 'There was an error fetching the repositories' });
      throw new Error(error.message);
    });
  }

  isLoading = () => {
    return !this.state.repositories[this.state.selectedLanguage] && !this.state.errorMsg;
  }

  render() {
    const { selectedLanguage, repositories } = this.state;

    return (
      <>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.setSelectedLanguage}
        />
        {this.isLoading() && <h2 style={{ textAlign: 'center' }}>Loading...</h2>}
        <RepositoriesGrid repositories={repositories[selectedLanguage] || []} />
      </>
    )
  }
}

export default Popular;
