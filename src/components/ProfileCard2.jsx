import { useState } from 'react';
import style from './ProfileCard.module.css'

function ProfileCard2(){

  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false)
  const [likeButton, setLikeButton] = useState(0)
  const skillArrray = ["employee management","team lead", "mentor"," Project Manager"]
  const [showSkills, setShowSkills] = useState(false)
    const [onlineStatus, setOnlineStatus] = useState(false)





 function toggleEmail() {
    setEmailButton(!emailButton);
  };

  
  const toggleSkills = () => {
    setShowSkills(!showSkills)
  }


   function likeIncrement() {
    setLikeButton(likeButton+1)
  }

  
  const toggleOnlineStatus = () => {
    setOnlineStatus(!onlineStatus)
  }

  function showStatus(){
    if (onlineStatus) {
      return <span>🟢Online</span>
    } else {
      return <span>🔴Busy</span>
    }
  }


  return <div className={style.profilecard}>
    <button className={style.likeButton} onClick={likeIncrement}>❤️ {likeButton}</button>
    
    <h2>Anand Tripathi</h2>
    <img src="profilephoto2.jpg" alt='Anand Tripathi'/>
    
    <div className={style.info}>
      <p><strong>Age:</strong> 29</p>
      <p><strong>Role:</strong> Manager</p>
    </div>
    
    <div className={style.bio}>
      I'm Anand Tripathi, Manager by profession and handle tasks efficiently, currently working at MaxWell Company
    </div>

    <div className={style.buttonContainer}>
      <button className={style.statusButton} onClick={toggleOnlineStatus}>
        Status: {showStatus()}
      </button>
      
      <button className={style.skillsButton} onClick={toggleSkills}>
        Skills: {showSkills ? "Hide" : "Show"}
      </button>
      
      <button className={style.emailButton1} onClick={toggleEmail}>
        {emailButton ? "Hide Email" : "Show Email"}
      </button>
    </div>

    {showSkills && (
      <div className={style.skillsList}>
        <strong>Skills:</strong>
        <ul>
          {skillArrray.map((skills, index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    )}

    {emailButton && (
      <div className={style.email}>
        📧 imanandtripath2323@gmail.com
      </div>
    )}
  </div>
}

export default ProfileCard2;