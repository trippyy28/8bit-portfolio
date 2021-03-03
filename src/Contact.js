import React, { useState } from "react";
import Container from "./Container";
import SocialMedia from "./SocialMedia";

export const Contact = () => {
  return (
    <div className="container p-3 d-flex flex-column h-110 mx-auto">
      <Container />
      <SocialMedia />
    </div>
  );
};
