import { useNavigate } from "react-router-dom";
import { Loader, UserAvatar } from "..";
import { useAuth, useUsers } from "../../index";
import { SlUserFollow } from "react-icons/sl";
const SuggestedUsers = () => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  const {
    usersState: { users },
    followUserHandler,
    isLoading,
    handleBtnsClick,
  } = useUsers();

  const filteredUsers = users
    ?.filter((dbUser) => dbUser.username !== currentUser?.username)
    ?.filter(
      (eachUser) =>
        !currentUser?.following?.find(
          (item) => item.username === eachUser.username
        )
    );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredUsers.length ? (
            <div className="flex flex-col gap-4 m-4 mt-0 px-4 py-3 bg-lighterPrimary dark:bg-darkGrey rounded-md max-h-[315px] overflow-hidden justify-start sticky top-[85px] ">
              <div className="text-lg font-bold tracking-wide">
                They are Amazing!
              </div>

              {filteredUsers?.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <UserAvatar user={user} className="h-9 w-9" />

                  <div
                    className="flex flex-col grow -mt-0.5"
                    onClick={() => navigate(`/profile/${user?.username}`)}
                  >
                    <span className="text-sm">
                      {user.firstName + " " + user.lastName}
                    </span>
                    <span className="text-sm text-[grey] -mt-1">
                      @{user.username}
                    </span>
                  </div>

                  <button
                    // className="py-3 px-5 rounded-md"
                    onClick={() =>
                      handleBtnsClick(400, followUserHandler, user?._id)
                    }
                  ><SlUserFollow/>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export { SuggestedUsers };
