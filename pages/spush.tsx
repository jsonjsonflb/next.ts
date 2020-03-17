import React from 'react';
import Layout from '../components/MyLayout';
import Banner from '@/components/common/Banner/Banner';
import ComLayout from '@/components/common/ComLayout/ComLayout';
import RenkList from '@/components/common/RenkList/RenkList';
import RecommendContent from '@/components/RecommendContent';

import style from '@/scss/push.scss';

const push = () => {
  return (
    <Layout>
      <div className={style.wrap}>
        <Banner />
        <ComLayout rankList={<RenkList />} content={<RecommendContent />} />
      </div>
    </Layout>
  );
};

export default push;
