import { useState } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Lead {
  name: string;
  email: string;
  project: string;
  duration: string;
  status: "Active" | "Lost Lead";
}

const initialLeads: Lead[] = [
  {
    name: "Charlie Donin",
    email: "wdavis@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: "3 Days",
    status: "Lost Lead",
  },
  {
    name: "Makenna Carder",
    email: "ltorres@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: "3 Days",
    status: "Active",
  },
];

const LeadsReport = () => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  const handleDelete = (email: string) => {
    setLeads(leads.filter((lead) => lead.email !== email));
  };

  return (
    <div className="container mx-auto px-4 dark:bg-gray-800 bg-white text-black dark:text-white p-6 rounded-lg w-full max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4">Leads Report</h2>
      <div className="overflow-x-auto">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4 sm:w-1/6">Name</TableHead>
              <TableHead className="w-1/4 sm:w-1/6">Email</TableHead>
              <TableHead className="w-1/4 sm:w-1/4">Project</TableHead>
              <TableHead className="w-1/4 sm:w-1/6">Duration</TableHead>
              <TableHead className="w-1/4 sm:w-1/6">Status</TableHead>
              <TableHead className="w-1/4 sm:w-1/12">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead, index) => (
              <TableRow
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="border-b border-white dark:border-gray-700"
              >
                <TableCell className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-xl font-bold">
                    {lead.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="truncate">{lead.name}</div>
                </TableCell>
                <TableCell className="truncate">{lead.email}</TableCell>
                <TableCell className="truncate">{lead.project}</TableCell>
                <TableCell>{lead.duration}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded ${
                      lead.status === "Active"
                        ? "bg-green-700 text-green-200"
                        : "bg-red-700 text-red-200"
                    }`}
                  >
                    {lead.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(lead.email)}
                    className="text-red-400 hover:text-red-600 bg-transparent hover:bg-transparent"
                  >
                    🗑️
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeadsReport;
