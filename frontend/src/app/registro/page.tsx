"use client";

import MainLayout from "@/components/layout/Layout";
import MyForm from "@/components/home/registerPage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialPsychologists = [
  {
    id: 1,
    name: "Dr. João Silva",
    username: "joaosilva",
    permissions: "Admin",
    password: "********",
  },
  {
    id: 2,
    name: "Dra. Maria Souza",
    username: "mariasouza",
    permissions: "User",
    password: "********",
  },
];

const RegistroPage = () => {
  const [psychologists, setPsychologists] = useState(initialPsychologists);

  const deletePsychologist = (id: number) => {
    const updatedList = psychologists.filter(
      (psychologist) => psychologist.id !== id
    );
    setPsychologists(updatedList);
  };

  return (
    <MainLayout>
      <div className="p-4 bg-white w-full h-full dark:bg-gray-900">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              <GrAdd />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-gray-800">
            <DialogHeader className="bg-white dark:bg-gray-800 text-black dark:text-white">
              <DialogTitle>Registrar Psicólogo</DialogTitle>
              <DialogDescription>
                Preencha as informações abaixo.
              </DialogDescription>
            </DialogHeader>
            <MyForm />
          </DialogContent>
        </Dialog>

        <div className="mt-8">
          <Table className="min-w-full table-auto border-collapse">
            <TableHeader>
              <TableRow className="bg-gray-200 dark:bg-gray-700">
                <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                  Nome
                </TableHead>
                <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                  Usuário
                </TableHead>
                <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                  Permissões
                </TableHead>
                <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {psychologists.map((psychologist) => (
                <TableRow
                  key={psychologist.id}
                  className="border-b border-gray-300 dark:border-gray-700"
                >
                  <TableCell className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {psychologist.name}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {psychologist.username}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {psychologist.permissions}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => deletePsychologist(psychologist.id)}
                      className="text-red-500 hover:text-red-700 bg-transparent hover:bg-transparent"
                    >
                      <AiOutlineDelete size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistroPage;
