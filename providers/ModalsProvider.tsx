"use client";

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import { SafeUser } from "../types";

interface ModalsProviderProps {
  currentUser?: SafeUser | null;
}

const ModalsProvider: React.FC<ModalsProviderProps> = ({ currentUser }) => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalsProvider;
