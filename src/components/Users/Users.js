import React from 'react';
import {connect} from 'dva';
import {Table, Pagination, Popconfirm} from 'antd';
import {routerRedux} from 'dva/router';
import styles from './Users.css';


import {PAGE_SIZE} from '../../constants';

import UserModal from './UserModel';


function Users({dispatch, list:dataSource, loading, total, page: cuttent}) {
  function deleteHandler(id) {
    dispatch({
      type:'users/remove',
      payload: id,
    })
  }

  function editHandler(id,values) {
    dispatch({
      type:'users/patch',
      payload:{id,values},
    })
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname:'/users',
      query:{page},
    }))
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(null,record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={cuttent}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}


function mapStateToPtops(state) {
  const {list, total, page} = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}
export default connect(mapStateToPtops)(Users);
