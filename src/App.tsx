import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Research } from '@/pages/Research';
import { Blog } from '@/pages/Blog';
import { Contact } from '@/pages/Contact';
import BlogPost from '@/pages/BlogPost';
import BlogByKeyword from '@/pages/BlogByKeyword';
import BlogByCategory from '@/pages/BlogByCategory'; // ✅ New import
import BlogByAuthor from '@/pages/BlogByAuthor'; // ✅ New import
import ServicePage from '@/pages/ServicePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="research" element={<Research />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogs/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/keyword/:keyword" element={<BlogByKeyword />} />  {/* ✅ New route */}
          <Route path="blog/category/:category" element={<BlogByCategory />} /> {/* ✅ New Route */}
          <Route path="blog/author/:author" element={<BlogByAuthor />} /> {/* ✅ New Route */}
          <Route path="services/:serviceSlug" element={<ServicePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



