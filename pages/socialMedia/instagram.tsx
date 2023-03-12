//setup boiler plate for function component
import React from "react";
import { Fragment } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <InstagramEmbed
          url="https://www.instagram.com/reel/CoAc8elAmj0/?utm_source=ig_web_copy_link"
          width="100%"
        />
      </div>
    </div>
  );
};
export default Instagram;
