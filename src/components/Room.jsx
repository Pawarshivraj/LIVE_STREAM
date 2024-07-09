// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();
  const livestream = async (element) => {
    const appID = 763676395;
    const serverSecret = "69bb81edeb7cfd1356ef3eae705c5d30";
    
    const userID = `user_${Date.now()}`;
    const userName = "shivraj_pawar";
    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: "copy link",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
    });
  };

  return <div className="room" ref={livestream} />;
};

export default Room;
