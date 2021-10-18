import React, { useState } from "react";
import Form from "../Form/Form";
import Post from "../Post/Post";
import "./MiniBlog.css";

const MiniBlog: React.FC = () => {
   return (
      <section className="mini-blog-container">
         <Post />
         <Form />
      </section>
   );
};

export default MiniBlog;
