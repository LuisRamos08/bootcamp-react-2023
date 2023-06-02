import styles from "./user.module.css";

const User = ({ image, fullName }) => {
  
  return (
    <div className={`animate__animated animate__backInUp animate__delay-${ Math.floor(Math.random()*3)}s  ${styles['user-container']} ${styles['some-bg']}`}>
      <img src={image} />
      <h4>{fullName}</h4>
    </div>
  );
};

export default User;
