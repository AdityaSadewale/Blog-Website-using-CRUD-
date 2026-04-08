import React from 'react';
import { Card } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const BlogCard = ({ post, onEdit, onDelete }) => {
  return (
    <Card className="blog-card">
      <div className="position-relative">
        <div className="card-img-container">
          <Card.Img variant="top" src={post.imageUrl || 'https://via.placeholder.com/1600x900'} alt={post.title} />
        </div>
        <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
          <button className="icon-btn-circle" onClick={(e) => { e.stopPropagation(); onEdit(post); }}>
            <PencilFill className="pencil-icon-light" />
          </button>
          <button className="icon-btn-circle" onClick={(e) => { e.stopPropagation(); onDelete(post._id); }}>
            <TrashFill className="trash-icon-light" />
          </button>
        </div>
      </div>
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <div className="category-tag me-3">{post.category}</div>
          <div className="text-secondary small fw-bold text-uppercase" style={{fontSize: '0.65rem', letterSpacing: '0.5px'}}>
            {Math.ceil(post.content.split(' ').length / 200)} MIN READ
          </div>
        </div>
        <Card.Title className="card-title my-2" style={{fontSize: '1.25rem'}}>{post.title}</Card.Title>
        <Card.Text className="text-secondary small" style={{lineHeight: '1.6'}}>
          {post.content.substring(0, 100)}...
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
