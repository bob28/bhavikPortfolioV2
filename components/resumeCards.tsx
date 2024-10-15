"use client";

import { Card } from "primereact/card";
import {
  FaClipboardList,
  FaLightbulb,
  FaCalendarAlt,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Chip } from "primereact/chip";

interface ResumeData {
  category: string;
  name: string;
  company?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  years: string[];
  summary?: string;
  description?: string[];
  url?: string;
}

interface ResumeCardsProps {
  data: ResumeData;
  type: string;
}

/**
 * A functional component that renders a resume card with provided data.
 *
 * @param {ResumeCardsProps} props - The properties for the ResumeCards component.
 * @param {Object} props.data - The data to be displayed in the resume card.
 * @param {string} props.data.company - The company name.
 * @param {string} props.data.name - The name of the position or role.
 * @param {string} props.data.startDate - The start date of the position.
 * @param {string} [props.data.endDate] - The optional end date of the position.
 * @param {string} [props.data.location] - The optional location of the position.
 * @param {string} props.data.summary - A brief summary of the position or role.
 * @param {string} props.type - The type of the resume card.
 *
 * @returns {JSX.Element} The rendered resume card component.
 */
export default function ResumeCards({ data, type }: ResumeCardsProps) {
  return (
    <Card
      className="shadow-lg rounded-2xl bg-slate-800 hover:bg-slate-900 hover:border hover:border-blue-500"
      pt={{
        body: {
          className: "px-5 py-2",
        },
      }}
    >
      <div>
        <div className="flex items-center text-sm">{data.company}</div>
        <h2 className="font-bold text-xl mt-2">{data.name}</h2>

        <div className="flex items-center text-sm mt-2">
          <FaCalendarAlt className="mr-2 text-blue-400" />
          <span>
            {data?.startDate} {data?.endDate ? " - " + data?.endDate : ""}
          </span>
          {data?.location && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 ml-3 text-blue-400" />
              <span>{data.location}</span>
            </div>
          )}
        </div>
        <div>
          <p className="text-sm mt-5">{data.summary}</p>
        </div>
      </div>
    </Card>
  );
}
