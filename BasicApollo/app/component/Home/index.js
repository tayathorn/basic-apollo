import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import { gql, graphql, compose } from 'react-apollo'

import Feed from '../Feed'

class Home extends Component {

  _renderLoading = () => {
    return(<ActivityIndicator/>)
  }

  _renderFeed = () => {
    return this.props.data.posts.map((post) => {
      return(
        <Feed key={post.id} data={post} onPressVoteButton={() => this.onPressVoteButton(post.id)}/>
      )
    })
  }

  onPressVoteButton = (postId) => {
    console.log('onPressVoteButton postId : ', postId)
    
    console.log('this.props : ', this.props)

    // normal mutation
    // this.props.mutate({
    //   variables: { postId }
    // })
    // .then((response) => {
    //   console.log('response :: ', response)
    // })
    // .catch((err) => {
    //   console.log('err :: ', err)
    // })


    // mutation with name
    this.props.votePost({
      variables: { postId }
    })
    .then((res) => {
      console.log('res : ', res)
    })
    .catch((err) => {
      console.log('err : ', err )
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

const VotePost = gql`
  mutation upvotePost($postId : Int!) {
    upvotePost(postId: $postId) {
      id
      title 
      votes
    }
  }
`

// const HomeWithFeed = graphql(PostQuery)(
//   graphql(VotePost)(Home)
// )

const HomeWithFeed = compose(
  graphql(PostQuery),
  graphql(VotePost, { name: 'votePost' })
)(Home)

export default HomeWithFeed