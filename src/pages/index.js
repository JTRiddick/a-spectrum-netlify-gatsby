import React from 'react'
import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
                <h1 className="has-text-weight-bold is-size-2">Hello Autospectrum</h1>
                <div className="debug">
                  <h4>This will be a website for Autospectrum LLC</h4>
                  <div>
                    <i>dealership services photography blah blah blah</i>
                  </div>

                </div>
            </div>
          </div>
        </section>
        <div className="debug">
          <span className="copyright">
            &copy; Autospectrum LLC., 2018 | All Rights Reserved
          </span>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
