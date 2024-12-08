import React, { useState } from "react";
import CalendarWrapper from "./Calendar";
import Year from "./Year";
import moment from "moment";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export enum LabelCode {
    Project = "PR",
    ToDo = "TD",
    PersonalToDo = "PTD",
    OfficeWork = "OW",
    Urgent = "U",
}

export const Label_STATUS_COLORS = {
    PR: "#FF9904",
    TD: "#0C8C4E",
    PTD: "#793200",
    OW: "#00B5DD",
    U: "#D50000",
}



export default function ControlCalender({ events = [] }) {

    const [contextMenu, setContextMenu] = React.useState<{
        mouseX: number;
        mouseY: number;
    } | null>(null);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
                // Other native context menus might behave different.
                // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
                null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };



    const components = {
        event: (props) => {
            const eventData = props?.event?.data?.work;
            switch (eventData.label) {
                case "PR":
                    return <div className="eventContainer project  p-2 flex items-center justify-start ">{eventData.title}</div>
                case "TD":
                    return <div className="eventContainer todo  p-2 flex items-center justify-start ">{eventData.title}</div>
                case "PTD":
                    return <div className="eventContainer pTodo  p-2 flex items-center justify-start ">{eventData.title}</div>
                case "OW":
                    return <div className="eventContainer officeWork  p-2 flex items-center justify-start ">{eventData.title}</div>
                case "U":
                    return <div className="eventContainer urgent  p-2 flex items-center justify-start ">{eventData.title}</div>
                default:
                    return null
            }
        },

    }

    return (
        <>
            <div onContextMenu={(e) => {
                e.preventDefault();
                handleContextMenu(e);
            }} >
                <CalendarWrapper defaultView={"year"} events={events} components={components} steps={15} timeslots={2} defaultDate={moment("2024-11-11").toDate()} />
            </div>
            {/* <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
                <Menu
                    open={contextMenu !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                        contextMenu !== null
                            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                            : undefined
                    }
                >
                    <MenuItem onClick={handleClose}>Copy</MenuItem>
                    <MenuItem onClick={handleClose}>Print</MenuItem>
                    <MenuItem onClick={handleClose}>Highlight</MenuItem>
                    <MenuItem onClick={handleClose}>Email</MenuItem>
                </Menu>


            </div> */}
        </>
    );
}