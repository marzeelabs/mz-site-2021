import React from 'react';
import { client } from '../lib/client';

import Header from './components-global/header';
import Footer from './components-global/footer';

const Blog = ({blogs}) => {

  return (
    <>
      <Header/>
      <main>
        {blogs?.map((blog) => {
          return (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <small>author: {blog.author}</small>
            </div>
          )
        })}
      </main>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async () => {
  const blogsQuery = '*[_type == "blog"]';
  const blogs = await client.fetch(blogsQuery);

  return {
    props: {
      blogs
    }
  }
}

export default Blog;
