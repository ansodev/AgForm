"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const variants = {
  closed: {
    width: "1px",
  },
  opened: {
    width: "250px",
    transition: { duration: 0.5 },
  },
};

const buttonVariants = {
  closed: {
    background: "#E0783E",
    color: 'white'
  },
  opened: {
    background: "white",
    color: '#E0783E',
    transform: 'rotate(180deg)',
    transition: { duration: 0.5 },
  },
};

export default function AddButton() {
  const [status, setStatus] = useState("closed");
  const [buttonStatus, setButtonStatus] = useState("closed");
  const router = useRouter();

  function handleMouseEnter() {
    setStatus('opened');
    setButtonStatus('opened');
  }

  function handleMouseLeave() {
    setStatus('closed');
    setButtonStatus('closed');
  }

  function handleClick() {
    router.push('/new-form/initial-form');
  }

  return (
    <div className="absolute bottom-5 right-5 flex justify-end overflow-hidden min-w-[100px] ">
      <motion.div
        variants={variants}
        animate={status}
        className="bg-[#E0783E] w-[0] h-[65px] border-[#F8AC81] border-[6px] rounded-full flex items-center pl-10 overflow-hiden mr-[-60px] whitespace-nowrap"
      >
        <span>Novo formulário</span>
      </motion.div>
      <motion.button
        variants={buttonVariants}
        animate={buttonStatus}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white p-[14px] rounded-full w-[65px] text-3xl z-10"
        onClick={handleClick}
      >
        +
      </motion.button>
    </div>
  );
}
