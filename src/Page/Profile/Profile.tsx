import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Modal from "./Modal";
import { Delete, Get } from "../../Service/service";
import { useCookies } from "react-cookie";
import del from "../../assets/delete.png";
import edit from "../../assets/edit.png";
import Select from "react-select";
import _debounce from "lodash/debounce";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [data, setData] = useState<any>();
  const [isUpdateData, setUpdateData] = useState(true);
  const [editData, setEditData] = useState(null);
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cookies] = useCookies(["token"]);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const debouncedSearch = _debounce((title) => {
    getData(title, currentPage);
  }, 500);

  const getData = async (title = "", page) => {
    const obj = {
      url: "https://test-react.agiletech.vn/posts",
      token: cookies.token,
      params: {
        title: title,
        page: page,
      },
    };
    const res = await Get(obj);
    if (res.posts) {
      setData(res.posts);
    }
  };

  const getTags = async () => {
    const obj = {
      url: "https://test-react.agiletech.vn/posts/tags",
      token: cookies.token,
    };
    const res = await Get(obj);
    setItems(res);
  };

  useEffect(() => {
    if (isUpdateData) {
      getData(title, currentPage);
      getTags();
      setUpdateData(false);
    }
  }, [currentPage, title, isUpdateData]);

  const onDelete = async (item: any) => {
    const obj = {
      url: `https://test-react.agiletech.vn/posts/${item}`,
      token: cookies.token,
    };
    const res = await Delete(obj);
    if (res) {
      setUpdateData(true);
    }
  };
  const handleEditClick = (item) => {
    setEditData(item);
    setShowModal(true);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    getData(title, newPage);
  };

  return (
    <div className="container mx-auto px-4 max-w-[1300px]">
      <Header />
      <div className="mt-[50px]">
        <div className="flex justify-between">
          <Button className="px-[60px]" onClick={handleOpenModal}>
            Add new
          </Button>
          <div className="flex gap-4">
            <input
              className="w-[368px] rounded-md p-2 border border-[#000] h-[50px]"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value), debouncedSearch(e.target.value);
              }}
              placeholder="Search by title"
              style={{ border: "1px solid #000" }}
            />
            {/* <Select
              name="tags"
              options={items.map((tag) => ({ value: tag, label: tag }))}
              className="w-[368px] rounded-md  "
              classNamePrefix="select "
             
            /> */}
          </div>
        </div>
        <table className="table mt-[40px] w-full bg-[#D9D9D9] border border-[#000] text-[20px] text-[#000]">
          <thead>
            <tr className=" border border-[#000]">
              <th className=" border p-2 border-[#000]">ID</th>
              <th className=" border p-2 border-[#000]">Title</th>
              <th className=" border p-2 border-[#000]">Description</th>
              <th className=" border p-2 border-[#000]">Tags</th>
              <th className=" border p-2 border-[#000]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-20">
                  No data
                </td>
              </tr>
            ) : (
              data?.map((item, index) => (
                <tr key={item.id}>
                  <td className="w-[40px] text-center  border border-[#000] p-2">
                    {index + 1}
                  </td>
                  <td className="w-[10%] border border-[#000] p-2">
                    {item.title}
                  </td>
                  <td className="w-[65%] border border-[#000] p-2">
                    {item.description}
                  </td>
                  <td className=" border border-[#000] p-2">
                    {item?.tags?.join(", ")}
                  </td>
                  <td className=" border border-[#000] p-2 w-[90px]">
                    <button
                      className="w-[30px] h-[30px] "
                      onClick={() => handleEditClick(item)}
                    >
                      <img src={edit} alt="" />
                    </button>
                    <button
                      className="w-[30px] h-[30px]"
                      onClick={() => onDelete(item.id)}
                    >
                      <img src={del} alt="" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="pagination flex justify-end gap-4">
          <Button
            className="px-[20px]"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#10094;
          </Button>
          <span className="font-bold text-[20px] w-[50px] h-[50px] bg-white border border-[#9C69E2] flex justify-center items-center rounded-full">
            {currentPage}
          </span>
          <Button
            className="px-[20px]"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={data?.length === 0}
          >
            &#10095;
          </Button>
        </div>
      </div>
      {showModal && (
        <Modal
          tagSelect={items}
          setUpdateData={setUpdateData}
          editData={editData}
          setEditData={setEditData}
          setOpen={setShowModal}
        />
      )}
    </div>
  );
};

export default Profile;
