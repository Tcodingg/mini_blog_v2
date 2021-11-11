import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import "./Form.css";
import { createPost } from "../../redux/action";
import { useDispatch } from "react-redux";

type postType = {
   title: string;
   note: string;
   img: string;
};
const Form: React.FC = () => {
   const [postData, setPostData] = useState<postType>({
      title: "",
      note: "",
      img: "",
   });

   const dispatch = useDispatch();

   function submitPost() {
      if (postData.title && postData.note) {
         dispatch(createPost(postData));
         setPostData({
            title: "",
            note: "",
            img: "",
         });
      }
   }
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
                  setPostData({ ...postData, img: base64 })
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
            <button onClick={submitPost}>Post</button>
         </div>
      </div>
   );
};

export default Form;
