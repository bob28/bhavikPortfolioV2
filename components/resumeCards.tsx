"use client";

import { Card } from "primereact/card";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

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
      className="shadow-lg rounded-2xl bg-slate-800 hover:bg-slate-900"
      pt={{
        body: {
          className: "px-5 py-2",
        },
      }}
    >
      <div>
        <div className="flex flex-col font-bold  gap-2">
          <h2 className="text-md">{data.company}</h2>
          <h2 className="text-lg">{data.name}</h2>
        </div>

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
          <p className="text-sm mt-3">{data.summary}</p>
        </div>
      </div>
    </Card>
  );
}
