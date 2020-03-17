import React from 'react';
import style from './recommendContent.scss';
import { Table } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const columns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'id'
  },
  {
    title: '赛事',
    dataIndex: 'competition',
    key: 'id'
  },
  {
    title: '主队',
    dataIndex: 'homeTeam',
    key: 'id'
  },
  {
    title: 'VS',
    dataIndex: 'vs',
    key: 'id'
  },
  {
    title: '客队',
    dataIndex: 'guestTeam',
    key: 'id'
  },
  {
    title: '推荐',
    dataIndex: 'recommend',
    key: 'id'
  },
  {
    title: '比分',
    dataIndex: 'score',
    key: 'id'
  },
  {
    title: '成绩',
    dataIndex: 'grade',
    key: 'id'
  }
];

const data = [
  {
    id: 1,
    key: '1',
    time: '2020-03-15 03:30',
    competition: '巴圣锦标',
    homeTeam: '发士大夫房贷给',
    vs: 'vs',
    guestTeam: '发士大夫房贷给',
    recommend: '发士大夫房贷给',
    score: '4:4',
    grade: '待定'
  },
  {
    id: 2,
    key: '1',
    time: '2020-03-15 03:30',
    competition: '巴圣锦标',
    homeTeam: '发士大夫房贷给',
    vs: 'vs',
    guestTeam: '发士大夫房贷给',
    recommend: '发士大夫房贷给',
    score: '4:4',
    grade: '待定'
  },
  {
    id: 3,
    key: '1',
    time: '2020-03-15 03:30',
    competition: '巴圣锦标',
    homeTeam: '发士大夫房贷给',
    vs: 'vs',
    guestTeam: '发士大夫房贷给',
    recommend: '发士大夫房贷给',
    score: '4:4',
    grade: '待定'
  },
  {
    id: 4,
    key: '1',
    time: '2020-03-15 03:30',
    competition: '巴圣锦标',
    homeTeam: '发士大夫房贷给',
    vs: 'vs',
    guestTeam: '发士大夫房贷给',
    recommend: '发士大夫房贷给',
    score: '4:4',
    grade: '待定'
  }
];

// footer list
const footerList: any = [];

const RecommendContent = () => {
  const pageInfo: any = {
    hideOnSinglePage: true,
    defaultCurrent: 1,
    pageSize: 20,
    total: 50,
    showQuickJumper: true
  };
  return (
    <div className={style.recommend_content}>
      <div className={style.header}>
        <h1>推荐内容</h1>
      </div>
      <section className={style.record_wrap}>
        <p>
          战绩：近一周：<span>3中2</span>
        </p>
        <p>
          近二周：<span>3中2</span>
        </p>
        <p>
          近一个月：<span>3中2</span>
        </p>
      </section>
      <section className={style.table_wrap}>
        <Table
          pagination={{
            showTotal: total => `共计 ${total} 个项目`,
            ...pageInfo
          }}
          columns={columns}
          dataSource={data}
        />
      </section>
    </div>
  );
};

export default RecommendContent;
