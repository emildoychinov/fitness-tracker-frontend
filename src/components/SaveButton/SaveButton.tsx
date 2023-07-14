import * as React from "react";
import { MouseEventHandler } from "react";
import "./SaveButton.css";
import { useEffect } from 'react';
import { FaSave } from "react-icons/fa";

interface SaveButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
  }
  
  const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        const button = e.currentTarget as HTMLButtonElement;
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
        }, 600);
      };
  
      const button = document.querySelector(".savebutton button");
      if (button) {
        button.addEventListener("click", handleClick);
      }
  
      return () => {
        if (button) {
          button.removeEventListener("click", handleClick);
        }
      };
    }, []);
  
    return (
      <div className="savebutton">
        <button onClick={onClick}>
          <a href="#">
            <i className="search-icon">
              <FaSave />
            </i>
          </a>
        </button>
      </div>
    );
  };
  
  export default SaveButton;