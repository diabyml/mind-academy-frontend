import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/button";
import BlogList from "./blog-list";

interface Props {
  onClose: (state: boolean) => void;
}

const AdminBlogList: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="bg-white overflow-auto padding-y-lg position-fixed top-0 right-0 bottom-0 left-0 z-index-overlay">
      <div className="container max-width-md">
        <header className="flex items-center justify-between margin-bottom-md">
          <span className="color-primary font-semibold text-sm">
            Les blogs
          </span>
          <Button variant="danger" size="sm" handler={() => onClose(false)}>
            <IoMdClose />
          </Button>
        </header>
        {/* blog list here */}
        <BlogList isAdmin />
      </div>
    </div>
  );
};

export default AdminBlogList;
