interface UserList {
  name: string;
  thumbnail: string;
}

interface ActiveUsersHeaderProps {
  userList: UserList[];
}

const ActiveUsersHeader: React.FC<ActiveUsersHeaderProps> = ({ userList }) => {
  return (
    <div className='sticky top-0 z-20 flex h-16 w-full shrink-0 items-center justify-between bg-white px-4'>
      <img src='' alt='메인로고'></img>
      {userList.map((user) => (
        <img className='h-12 w-12 rounded-full object-cover' src={user.thumbnail} alt='유저 썸네일' />
      ))}
    </div>
  );
};

export default ActiveUsersHeader;
