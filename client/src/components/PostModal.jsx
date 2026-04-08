import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const PostModal = ({ show, onHide, onSubmit, editPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'React',
    imageUrl: '',
    content: ''
  });

  useEffect(() => {
    if (editPost) {
      setFormData({
        title: editPost.title,
        category: editPost.category,
        imageUrl: editPost.imageUrl,
        content: editPost.content
      });
    } else {
      setFormData({
        title: '',
        category: 'React',
        imageUrl: '',
        content: ''
      });
    }
  }, [editPost, show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={show} onHide={onHide} centered className="post-modal" size="lg">
      <Modal.Header closeButton closeVariant="white" className="border-0 pb-0">
        <Modal.Title className="w-100">
          <div className="text-info small fw-bold text-uppercase mb-2" style={{letterSpacing: '1px'}}>Editor</div>
          <h2 className="fw-extrabold mb-1" style={{fontSize: '2.5rem'}}>Compose New Post</h2>
          <p className="text-secondary small mb-4" style={{maxWidth: '400px'}}>Deploy your architectural insights to the Dily_Blog.com compiler. Ensure your technical documentation meets the system standards for publication.</p>
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="pt-0">
          <Form.Group className="mb-4">
            <Form.Label className="small text-secondary fw-bold text-uppercase" style={{letterSpacing: '1px'}}>Article Title</Form.Label>
            <Form.Control 
              type="text" 
              name="title"
              placeholder="Enter a descriptive technical title..." 
              value={formData.title}
              onChange={handleChange}
              required
              className="py-3 px-3"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="small text-secondary fw-bold text-uppercase" style={{letterSpacing: '1px'}}>Taxonomy / Category</Form.Label>
            <Form.Select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="py-3 px-3"
            >
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="SQL">SQL</option>
              <option value="Shooting">Shooting</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="small text-secondary fw-bold text-uppercase" style={{letterSpacing: '1px'}}>Cover Image URL</Form.Label>
            <Form.Control 
              type="text" 
              name="imageUrl"
              placeholder="https://images.unsplash.com/..." 
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="py-3 px-3"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="small text-secondary fw-bold text-uppercase" style={{letterSpacing: '1px'}}>Markdown Content</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5} 
              name="content"
              placeholder="Describe the architectural patterns, code snippets, or technical discoveries..." 
              value={formData.content}
              onChange={handleChange}
              required
              className="py-3 px-3"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0 pb-5">
          <Button variant="info" type="submit" className="btn-publish py-3 fw-bold">
            {editPost ? 'Save Changes' : 'Publish Article'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default PostModal;
