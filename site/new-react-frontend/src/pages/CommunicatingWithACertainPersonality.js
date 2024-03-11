import styles from "./MainMenu.module.css";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate();

    const onRectangleClick = () => {
        navigate("/learning-the-meaning-of-different-phrases");
    };

    const onLogOutClick = () => {
        navigate("/");
    };

    const onRedFlagsClick = () => {
        navigate("/red-flags")
    };

    const onAIInsightsClick = () => {
        navigate("/ai-insights");
    };

  return (
    <div className={styles.mainMenu}>
      <div className={styles.communicatingpersonalityrec}>
        <div className={styles.communicatingpersonalityrectan} />
      </div>
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image2Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.graytyping}>
          <img className={styles.chatBubble3} alt="" src="/chat-bubble-3.svg" />
          <img
            className={styles.graytypingChild}
            alt=""
            src="/rectangle-58.svg"
          />
          <div className={styles.div}>...</div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
        <input
          className={styles.type}
          id="inputbox"
          placeholder=" Type Here..."
          type="text"
        />
        <div className={styles.bluetxt4}>
          <div className={styles.chatBubble2} />
          <div className={styles.whatWouldI}>
            What would I say to someone who is neurotic?
          </div>
          <div className={styles.bluetxt4Child} />
        </div>
        <div className={styles.communicatingWithACertainP}>
          <div className={styles.communicatingWithA}>
            Communicating with a certain personality
          </div>
        </div>
        <div className={styles.sidebarcommunicatingwith}>
          <div className={styles.sidebarcommunicatingwithChild} />
        </div>
      </div>
      <button className={styles.logout} id="logoutbutton" onClick={onLogOutClick}>
        <div className={styles.rec29} />
        <div className={styles.logOut}>Log Out</div>
      </button>
      <button className={styles.communicate} id="communicatebutton">
        <div className={styles.rec6} />
        <div className={styles.communicatingWithA1}>
          Communicating with a certain personality
        </div>
        <img
          className={styles.communicatewithapersonalitymorIcon}
          alt=""
          src="/communicatewithapersonalitymorethan@2x.png"
        />
      </button>
      <button className={styles.learningmeaning} id="learningmeaningbutton" onClick={onRectangleClick}>
        <div className={styles.rec7} />
        <div className={styles.learningTheMeaning}>
          Learning the meaning of different phrases
        </div>
        <img className={styles.moreThanIcon} alt="" src="/more-than@2x.png" />
      </button>
      <button className={styles.analyze} id="analyzebutton">
        <div className={styles.rec9} />
        <div className={styles.analyzeAConversation}>
          Analyze a conversation
        </div>
        <img className={styles.moreThanIcon1} alt="" src="/more-than@2x.png" />
      </button>
      <button className={styles.viewhistory} id="historybutton">
        <div className={styles.rec12} />
        <div className={styles.viewHistory}>View History</div>
        <img
          className={styles.moreThanIcon2}
          alt=""
          src="/communicatewithapersonalitymorethan@2x.png"
        />
      </button>
      <button className={styles.newchat} id="newchatbutton" onClick={onAIInsightsClick}>
        <div className={styles.rec28} />
        <div className={styles.newChat}>New Chat</div>
        <img
          className={styles.newchatmorethancommunicatingIcon}
          alt=""
          src="/communicatewithapersonalitymorethan@2x.png"
        />
      </button>
      <button className={styles.difftraits} id="difftraitsbutton">
        <div className={styles.rec10} />
        <img className={styles.moreThanIcon3} alt="" src="/more-than@2x.png" />
        <div className={styles.differentTraits}>Different Traits</div>
      </button>
      <button className={styles.findredflags} id="redflagsbutton" onClick={onRedFlagsClick}>
        <div className={styles.rec11} />
        <img className={styles.moreThanIcon4} alt="" src="/more-than@2x.png" />
        <div className={styles.findingRedFlags}>Finding Red Flags</div>
      </button>
    </div>
  );
};

export default MainMenu;
