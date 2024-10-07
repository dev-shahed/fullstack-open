import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const style = {
    border: 'solid',
    color: 'white',
    padding: 10,
    borderWidth: 1,
  };

  if (!notification) {
    return null;
  }
  return (
    <div style={style}>{notification}</div>
  )
};

export default Notification;
