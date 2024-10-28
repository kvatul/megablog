import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import DataService from "../appwrite/database";

const AllPost = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    DataService.listPost([]).then((post) => {
      console.log(post);
      if (post) setPosts(post.documents);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-warp">
          {posts?.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg-1/4 max-h-96"
            >
              <PostCard
                id={post.$id}
                title={post.title}
                featuredimage={post.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
