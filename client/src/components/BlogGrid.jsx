import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';


const BlogGrid = ({ posts, onEdit, onDelete }) => {
  if (posts.length === 0) {
    return (
      <Container>
        <div className="empty-state">
          <h3>No articles found.</h3>
          <p className="text-secondary">Create the first one to start the compilation feed.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="pb-5">
      <Row className="g-4">
        {posts.map(post => (
          <Col key={post._id} xs={12} md={6} lg={4}>
            <BlogCard post={post} onEdit={onEdit} onDelete={onDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogGrid;
