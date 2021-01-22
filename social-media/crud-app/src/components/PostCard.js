import React, { useContext } from 'react'
import { Button, Card, Container, Icon, Label, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { AuthContext } from '../context/auth'
import LikeButton from './LikeButton'

import DeleteButton from './DeleteButton'
import MyPopup from '../utils/MyPopup'

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {


    const { user } = useContext(AuthContext);

    return (
        <Card fluid >
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png'
                />
                <Container as={Link} to={`/posts/${id}`}>
                    <Card.Header className='header' style={{ color: 'black' }}>{username}</Card.Header>
                    <Card.Meta >{moment(createdAt).fromNow(true)}</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>{body}</Card.Description>
                </Container>
            </Card.Content>
            <Card.Content extra>

                <LikeButton user={user} post={{ id, likes, likeCount }} />

                <MyPopup content='Leave a Comment'>
                    <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                        <Button color='blue' basic>
                            <Icon name='comments' style={{ width: 2 }} />
                        </Button>
                        <Label basic color='blue' pointing="left">
                            {commentCount}
                        </Label>
                    </Button>
                </MyPopup>

                {user && user.username === username && <DeleteButton postId={id} />}

            </Card.Content>
        </Card>
    )
}

export default PostCard