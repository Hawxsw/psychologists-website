import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useState } from "react";
import { AiOutlineClose, AiOutlineClockCircle } from "react-icons/ai"; // Ícones importados

const initialAppointments = [
  {
    id: 1,
    name: "Carlos Andrade",
    day: "20/09/2024",
    time: "14:00",
  },
  {
    id: 2,
    name: "Ana Pereira",
    day: "21/09/2024",
    time: "10:00",
  },
];

const ClientList = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const cancelAppointment = (id: number) => {
    const updatedList = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedList);
  };

  const rescheduleAppointment = (id: number) => {
    // Lógica para remarcar a consulta
    console.log("Remarcar consulta para o cliente com ID:", id);
  };

  return (
    <div className="mt-8">
      <Table className="min-w-full table-auto border-collapse">
        <TableHeader>
          <TableRow className="bg-gray-200 dark:bg-gray-700">
            <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
              Nome
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
              Dia
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
              Horário
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment.id}
              className="border-b border-gray-300 dark:border-gray-700"
            >
              <TableCell className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {appointment.name}
              </TableCell>
              <TableCell className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {appointment.day}
              </TableCell>
              <TableCell className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {appointment.time}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => cancelAppointment(appointment.id)}
                  className="text-red-500 hover:text-red-700 bg-transparent hover:bg-transparent mr-2"
                >
                  <AiOutlineClose size={20} />
                </Button>
                <Button
                  onClick={() => rescheduleAppointment(appointment.id)}
                  className="text-blue-500 hover:text-blue-700 bg-transparent hover:bg-transparent"
                >
                  <AiOutlineClockCircle size={20} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientList;
