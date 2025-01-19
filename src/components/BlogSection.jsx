"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogPosts = [
    {
      category: "Friday Lectures",
      title: "What Happens After You DIE?",
      description:
        "An exploration of spiritual perspectives and religious teachings on the afterlife.",
      image: "/blog/blog2.avif",
    },
    {
      category: "Donation",
      title: "Charity To Education For Needy People",
      description:
        "Supporting educational initiatives for underprivileged communities through charitable programs.",
      image: "/blog/blog1.avif",
    },
  ];

  return (
    <section id="blog">
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex justify-between items-center mb-12"
            data-aos="fade-up"
          >
            <div>
              <p className="text-orange-500 font-medium mb-2">
                INSIGHTS AND UPDATE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Recent Blog And News
              </h2>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              View All Blog
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-6 bg-white">
                    <span className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-full text-sm font-medium mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
