import React, { useState } from "react";
import Blog1 from "../assets/blog-1.jpg";
import Blog2 from "../assets/blog-2.jpg";
import Blog3 from "../assets/blog-3.jpg";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      image: Blog1,
      title: "A Guide to Latest Trends",
      author: "By Admin",
    },
    {
      id: 2,
      image: Blog2,
      title: "Exploring New Technologies",
      author: "By Admin",
    },
    {
      id: 3,
      image: Blog3,
      title: "The Future of Web Design",
      author: "By Admin",
    },
  ]);

  return (
    <div className="font-sans">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-8 font-medium">OUR BLOG</h2>
      </div>

      <div className="mb-12 mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="relative w-full md:w-11/12 lg:w-[30vw] lg:h-[20vw] mx-auto mb-20"
            >
              <div className="overflow-hidden w-full h-full">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full transition duration-300 transform hover:scale-125 object-cover"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10/12 bg-white p-4 z-10 text-center">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
