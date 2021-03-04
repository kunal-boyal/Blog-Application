import React from 'react';
import { Card, ListGroupItem, ListGroup, Form, Button } from 'react-bootstrap'

const BlogCard = (props) => {
    const comments = props.comments.map((comment) => <ListGroupItem key={comment.comment}>{comment.userName} : { comment.comment}</ListGroupItem>)
    return (
        <React.Fragment>
            <Card style={{ width: '60%', margin: 'auto', marginTop: '2rem' }}>
                <Card.Img variant="top" src={props.img}  />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.body}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {comments}
                </ListGroup>
            </Card>
            <Form onSubmit={(e) => props.submit(e, props.blogId)} style={{ width: '60%', margin: 'auto' }}>
                <Form.Group>
                    <Form.Control type="type" onChange={(e) => props.change(e, 'comment')} placeholder="Write a comment..." value={props.commentValue} />
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}

export default BlogCard