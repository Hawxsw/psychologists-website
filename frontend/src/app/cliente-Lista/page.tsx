"use client";

import ClientList from "@/components/home/listPage";
import MainLayout from "@/components/layout/Layout";

const RegistroPage = () => {
  return (
    <MainLayout>
      <div className="p-4 bg-white w-full h-full dark:bg-gray-900">
        <ClientList />
      </div>
    </MainLayout>
  );
};

export default RegistroPage;
