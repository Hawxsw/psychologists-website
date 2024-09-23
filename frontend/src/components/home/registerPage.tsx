"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MyForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Form submitted");
  };

  return (
    <div className="rounded-lg bg-white dark:border-strokedark dark:bg-gray-800 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium bg-white dark:bg-gray-800  text-black dark:text-white"
          >
            Nome
          </label>
          <Input
            id="name"
            placeholder="Digite seu nome"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white dark:bg-gray-800  text-black dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium bg-white dark:bg-gray-800  text-black dark:text-white"
          >
            Nome de Usuário
          </label>
          <Input
            id="username"
            placeholder="Digite seu nome de usuário"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white dark:bg-gray-800  text-black dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium bg-white dark:bg-gray-800  text-black dark:text-white"
          >
            Senha
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white dark:bg-gray-800  text-black dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="permissions"
            className="block text-sm font-medium bg-white dark:bg-gray-800  text-black dark:text-white"
          >
            Permissões
          </label>
          <Input
            id="permissions"
            placeholder="Digite as permissões"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white dark:bg-gray-800  text-black dark:text-white"
          />
        </div>

        <div>
          <Button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
