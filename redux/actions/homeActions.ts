import { helper } from '@/utils';

export const GET_HOME_LIST = 'GET_HOME_LIST';

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/cities').then(res => {
      if (res.status === 200) {
        return dispatch(
          helper.createAction(GET_HOME_LIST, { list: res.data.hotCities })
        );
      }
      return dispatch(helper.createAction(GET_HOME_LIST, { list: [] }));
    });
  };
};

export const getHome = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/rest/getTestList').then(res => {
      if (res.status === 200) {
        return dispatch(
          helper.createAction(GET_HOME_LIST, { list: res.data.data.data })
        );
      }
      return dispatch(helper.createAction(GET_HOME_LIST, { list: [] }));
    });
  };
};
