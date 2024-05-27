import * as React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import AuthApi from "../helper/AuthApi";
import Axios from 'axios';

Quill.register("modules/imageResize", ImageResize);

const Editor = () => {
  const [category, setCategory] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState([]);


  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCategory((prevState) => [...prevState, value]);
    } else {
      setSelectedCategory((prevState) =>
        prevState.filter((id) => id !== value)
      );
    }
  }
  console.log(selectedCategory);
  const fetchCategoryData = async () => {
    try {
      const response = await AuthApi.get("/category");
      setCategory(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
            const formData = new FormData();

            formData.append("title", title);
            formData.append("featured_image", image);
    formData.append("content", content);
  selectedCategory.forEach((categoryId) => {
    formData.append("category[]", categoryId);
  });const config = {
  headers: { "content-type": "multipart/form-data" },
};

  AuthApi.post("/post",formData, config).then((response) => {
    console.log(response.data)
  }).catch((err) => {
    console.log(err.response.data.data)
  })
   
  };

  // const createPost = () => {
  
    
  // }
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };


  React.useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Featured Image</span>
          </div>
          <input
            type="file"
            name="featured_image"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <div>
          <label>Category</label>
          {category?.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                id={`category-${item.id}`}
                value={item.id}
                name="category"
                onChange={handleChange}
                  checked={selectedCategory.includes(item.id.toString())}
              />
              <label htmlFor={`category-${item.id}`}>{item.category}</label>
            </div>
          ))}
        </div>
        <ReactQuill
          theme="snow"
          name="value"
          modules={modules}
          value={content}
          onChange={setContent}
        />
        <div className="flex justify-center">
          <button
            className="btn"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
