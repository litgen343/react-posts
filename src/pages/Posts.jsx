import React, { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { PostForm } from '../components/PostForm';
import { PostFilter } from '../components/PostFilter';
import { MyModal } from '../components/UI/MyModal/MyModal';
import { MyButton } from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/Loader/Loader';
import { getPageCount } from '../utils/pages';
import { Pagination } from '../components/UI/pagination/Pagination';
import PostService from '../api/PostService';
import '../styles/App.css';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create user</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ textAlign: 'Center', marginTop: '30px' }}>
          There was a mistake - '{postError}'
        </h1>
      )}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'List of posts'}
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};
