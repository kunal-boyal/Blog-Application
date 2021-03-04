import React from 'react';
import { Form, Button } from 'react-bootstrap'

const BlogForm = (props) => (
    <Form onSubmit={props.submit}>
        <Form.Group >
            <Form.File id="exampleFormControlFile1" label="Example file input" onChange={(e) => props.change(e, 'blogPicture')} />
        </Form.Group>
        <Form.Group >
            <Form.Control type="text" placeholder="Enter title" onChange={(e) => props.change(e, 'title')} value={ props.title}/>
        </Form.Group>
        <Form.Group >
            <Form.Control type="text" placeholder="Enter body" onChange={(e) => props.change(e, 'body')} value={props.body} />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
            Add Blog
        </Button>
    </Form>
)

export default BlogForm