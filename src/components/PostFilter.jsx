import React from 'react';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect'; 

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        style={{ marginBottom: '14px' }}
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.query}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />
    </div>
  );
};
