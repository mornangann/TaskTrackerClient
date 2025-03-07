"use client";
import DeleteModal from "@/app/Components/DeleteModal/DeleteModal";
import Modal from "@/app/Components/Modal/Modal";
import ProfileModal from "@/app/Components/Profile/ProfileModal";
import { useTasks } from "@/context/taskContext";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { isEditing, profileModal, deleteModal } = useTasks();
  return (
    <div className="flex-1 main-layout bg-ttbg border-2 border-ttac rounded-[1.5rem] overflow-auto">
      {isEditing && <Modal />}
      {profileModal && <ProfileModal />}
      {deleteModal && <DeleteModal />}
      {children}
    </div>
  );
}

export default MainLayout;
