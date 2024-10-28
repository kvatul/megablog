import React, { useEffect, useState } from "react";
import DataService from "../appwrite/database"; // "../../appwrite/database";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../components/index";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  debugger;
  useEffect(() => {
    if (slug) {
      DataService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
