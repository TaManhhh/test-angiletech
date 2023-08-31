import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import "./style.css";
import { Patch, Post } from "../../Service/service";
import { useCookies } from "react-cookie";
import Select from "react-select";
const Modal = ({
  tagSelect,
  setUpdateData,
  editData,
  setEditData,
  setOpen,

}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [cookies] = useCookies(["token"]);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setTags(editData.tags);
      setDescription(editData.description);
    } 
  }, [editData]);


  const handleSubmit = async () => {
    let hasError = false;
    if (!title) {
      setErrorTitle("Please enter title");
      hasError = true;
    } else {
      setErrorTitle("");
    }
    if (!description) {
      setErrorDescription("Please enter description");
      hasError = true;
    } else {
      setErrorDescription("");
    }
    if (hasError) {
      return;
    }
    const data = {
      title: title,
      description: description,
      tags: tags,
    };
    const obj = {
      url: `https://test-react.agiletech.vn/posts${
        editData ? `/${editData.id}` : ""
      }`,
      token: cookies.token,
      body: data,
    };
    const res = editData ? await Patch(obj) : await Post(obj);
    if (res) {
      setUpdateData(true);
      setEditData(null);
      setOpen(false);
    }
  };
  const handleClose = () => {
    setEditData(null);
    setOpen(false)
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{editData ? "Edit Post" : "Add New Post"}</h2>
        <div className=" mt-[20px]">
          <p>Title *</p>
          <input
            className="w-full p-4 rounded-md  border border-[#000] h-[50px]"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          {errorTitle && <p className="text-red-500">{errorTitle}</p>}
        </div>
        <div className="mt-[20px]">
          <p>Tags</p>
          <Select
            isMulti
            name="tags"
            options={tagSelect.map((tag) => ({ value: tag, label: tag }))}
            value={tags.map((tag) => ({ value: tag, label: tag }))}
            onChange={(selectedOptions) =>
              setTags(selectedOptions.map((option) => option.value))
            }
            className="basic-multi-select border border-[#000] rounded-md"
            classNamePrefix="select "
          />
        </div>
        <div className="mt-[20px]">
          <p>Description *</p>
          <textarea
            className="w-full  p-4 rounded-md  border border-[#000] "
            placeholder="Description"
            value={description}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errorDescription && (
            <p className="text-red-500">{errorDescription}</p>
          )}
        </div>

        <div className="modal-buttons gap-4">
          <Button
            onClick={handleClose}
            className="px-[30px]"
            style={{
              backgroundColor: "#fff",
              borderColor: "#9C69E2",
              border: "1px solid",
              color: "#000",
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="px-[30px]">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
