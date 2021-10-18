import React, { useState } from "react";
import Form from "../Form/Form";
import Post from "../Post/Post";

const MiniBlog: React.FC = () => {
   return (
      <section className="mini-blog">
         <Form />
         <Post />
      </section>
   );
};

export default MiniBlog;
