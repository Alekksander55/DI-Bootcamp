import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./userSlice";
import { useEffect } from "react";

const UserList = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div>
      <h1>User's List</h1>
      {user.loading ? (
        <h1>LOADING LOADING LOADING LOADING </h1>
      ) : (
        user.data?.map((item) => {
          return (
            <div key={item.id}>
              <img src={`https://robohash.org/${item.id}?set=set4`} />
              <p>{item.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserList;
