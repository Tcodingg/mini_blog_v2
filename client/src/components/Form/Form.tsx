import React, { useState } from "react";
import FileBase64 from "react-file-base64";

const Form: React.FC = () => {
   const [postData, setPostData] = useState({
      title: "",
      note: "",
      image: "",
   });

   console.log(postData);
   return (
      <div className="form-container">
         <h5 className="title">share you blog</h5>
         <div className="form">
            <input
               type="text"
               name="title"
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPostData({ ...postData, title: e.target.value })
               }
               placeholder="Title"
               value={postData.title}
            />
            <FileBase64
               type="file"
               background="red"
               multiple={false}
               onDone={({ base64 }) =>
                  setPostData({ ...postData, image: base64 })
               }
            />
            <textarea
               name="note"
               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setPostData({ ...postData, note: e.target.value })
               }
               placeholder="Note..."
               value={postData.note}
            />
         </div>
      </div>
   );
};

export default Form;
