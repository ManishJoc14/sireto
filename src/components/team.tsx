"use client"

import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { TeamTable } from "../components/TeamTable"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { teamData, TeamData } from '../../public/team_data/data'


// Define the columns for our table
const columns: ColumnDef<TeamData>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "department",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}

                >
                    Department
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "year",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}

                >
                    Year
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "role",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}

                >
                    Role
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}

                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const teamMember = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(teamMember.email)}
                        >
                            Copy email address
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        {/* <DropdownMenuItem>Edit member</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function TeamsTable() {
    return (
        <div className="container mx-auto p-4 min-h-screen bg-background text-foreground">
            <Tabs defaultValue="directory" className="w-full">
                <TabsList>
                    <TabsTrigger value="directory">Team Directory</TabsTrigger>
                    <TabsTrigger value="analytics">Team Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="directory">
                    {/* TEAMS TABLE */}
                    <TeamTable columns={columns} data={teamData} />
                </TabsContent>
                <TabsContent value="analytics">
                    {/* NOTE - USE CHART to show analytics */}
                </TabsContent>
            </Tabs>
        </div>
    )
}

