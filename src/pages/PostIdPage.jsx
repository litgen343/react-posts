import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/Loader/Loader';
import PostService from '../api/PostService';
import getCommentsById from '../api/PostService';

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, comError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div style={{ maxWidth: '830px', padding: '0 30px' }}>
      <h1>You opened page`s post with ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1 style={{ marginTop: '30px' }}>Comments</h1>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div style={{ marginTop: '15px' }}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
