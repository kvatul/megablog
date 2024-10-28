import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataService from "../appwrite/database";
import FileService from "../appwrite/file";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  console.log(slug, userData);

  useEffect(() => {
    if (slug) {
      DataService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    DataService.deletePost(post.$id).then((status) => {
      if (status) {
        FileService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-4/5 h-4/5 mx-auto mb-4 relative border rounded-xl p-2">
          <img
            src={FileService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full h-full"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              {/* <Link to={`/edit-post/${post.$id}`}> */}
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6 text-center">
          <h1 className="text-2xl font-bold  ">{post.title}</h1>
        </div>
        <div className="browser-css text-center">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}
