import React from "react"
import PropTypes from 'prop-types';

import LinksDetailComponent from '../../components/LinksDetail'
import { LINKS_API_URL } from '../../utils/urls'
import { getUrl } from '../../utils/api'


export default class  LinksDetail extends React.Component {
 
  constructor(props) {
    super(props);
    const { links } = this.props;
    this.state = {
      links: [...links]
    }
  }
  
  static propTypes = {
    links: PropTypes.array
  }

  _onRefresh = () => {
    getUrl(LINKS_API_URL)
      .then(newLinks => {
        const links = newLinks.map(link => {
          return {
            pk: link.id,
            fields: link
          }
        });
        this.setState({ links });
      })
  }

  render() {
    const { links } = this.props;
    return (
      <LinksDetailComponent links={links} onRefresh={this._onRefresh}/>
    )
  }
}