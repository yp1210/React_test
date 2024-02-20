import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { inc, de } from './store/models/counterStore'
import { getlist } from './store/models/chanerStore'
import { getCurrentTime } from './store/models/timeStore'
import dayjs from "dayjs";

function useGetList() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3004/posts").then((res) => {
  //     setPosts(res?.data);
  //   });
  // }, []);
  return {
    posts,
    setPosts,
  };
}

function setReduxList () {
  return async (dispatch) => {
       const res = await axios.get("http://localhost:3004/posts");
       dispatch(getlist(res?.data))
  }
}

function setPromiseTime () {
  return function (dispatch) {
    axios.get('http://localhost:3004/time').then(res => {
      dispatch(getCurrentTime(res.data.nowDate))
    })
  }
}

function App() {
  const { posts } = useGetList();
  
  const { count } = useSelector((state) => state.counter);
  const { list } = useSelector((state) => state.channel) || {};
  const { nowDate } = useSelector(state => state.time);
  const dispatch = useDispatch();
  console.log(posts);
  console.log(list);

  useEffect(() => {
    dispatch(setReduxList());
    dispatch(getCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss')))
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => {dispatch(inc())}}>+</button>
      <span>{count}</span>
      <button onClick={() => {dispatch(de())}}>-</button>
      <button onClick={() => {dispatch(de(20))}}>-20</button>
      <button onClick={() => {dispatch(setPromiseTime())}}>动态获取时间</button>
      <div>{nowDate}</div>
    </div>
  );
}

export default App;
