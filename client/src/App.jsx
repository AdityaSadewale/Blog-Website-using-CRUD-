import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import PostModal from './components/PostModal';
import { Spinner } from 'react-bootstrap';

const API_URL = 'http://localhost:5000/api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts
  useEffect(() => {
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  // CRUD Operations
  const handleAddPost = () => {
    setEditPost(null);
    setShowModal(true);
  };

  const handleEditPost = (post) => {
    setEditPost(post);
    setShowModal(true);
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to permanently delete this article?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchPosts();
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    }
  };

  const handleModalSubmit = async (formData) => {
    try {
      if (editPost) {
        await axios.put(`${API_URL}/${editPost._id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setShowModal(false);
      fetchPosts();
    } catch (err) {
      console.error('Error saving post:', err);
    }
  };

  return (
    <div className="App">
      <Navigation onAddClick={handleAddPost} />
      <Hero onSearch={setSearchTerm} />
      
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="info" style={{ width: '3rem', height: '3rem', borderWidth: '0.3em' }} />
          <p className="mt-3 text-secondary text-uppercase fw-bold letter-spacing-1">COMPILING FEED</p>
        </div>
      ) : (
        <BlogGrid 
          posts={filteredPosts} 
          onEdit={handleEditPost} 
          onDelete={handleDeletePost} 
        />
      )}

      <PostModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        onSubmit={handleModalSubmit}
        editPost={editPost}
      />

      <footer className="py-5 text-center text-secondary border-top border-secondary mt-5 mx-auto" style={{maxWidth: '800px', opacity: 0.6}}>
        <h5 className="sub2-brand mb-1">Dily_Blog.com</h5>
        <p className="small mb-4">© 2024 Dily_Blog.com Architectural Compiler</p>
        <div className="d-flex justify-content-center gap-4 small fw-bold">
          <a href="#" className="text-decoration-none text-secondary">GitHub</a>
          <a href="#" className="text-decoration-none text-secondary">LinkedIn</a>
          <a href="#" className="text-decoration-none text-secondary">Documentation</a>
          <a href="#" className="text-decoration-none text-secondary">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
