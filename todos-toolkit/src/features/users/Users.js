import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";
import { filterAuthor } from "../posts/postsSlice";

const Users = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return ( <div>
<select onChange={(e)=>dispatch(filterAuthor(e.target.value))}>
        <option value={-1}>Select Author</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Users;
