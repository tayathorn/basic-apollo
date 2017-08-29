import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import { gql, graphql } from 'react-apollo'

import Feed from '../Feed'

class Home extends Component {

  _renderLoading = () => {
    return(<ActivityIndicator/>)
  }

  _renderFeed = () => {
    return this.props.data.posts.map((post) => {
      console.log('post : ', post)
      return(
        <Feed key={post.id} data={post}/>
      )
    })
  }

  render() {
    console.log('this.props.data :: ', this.props.data)
    return(
      <View style={styles.container}>
        { this.props.data.loading ?
            this._renderLoading()
            :
            <ScrollView>
              { this._renderFeed() }
            </ScrollView>
        }
      </View>
    )
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    posts: PropTypes.array
  }).isRequired,
}

const styles = {
  container: {
    flex:1,
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const PostQuery = gql`
  query PostQuery {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
        avatar
      }
    }
  }
`

const HomeWithFeed = graphql(PostQuery)(Home)

export default HomeWithFeed