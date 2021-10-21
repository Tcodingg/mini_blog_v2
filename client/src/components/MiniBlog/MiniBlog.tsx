import React from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import "./MiniBlog.css";

const MiniBlog: React.FC = () => {
   return (
      <section className="mini-blog-container">
         <Posts />
         <Form />
      </section>
   );
};

export default MiniBlog;
