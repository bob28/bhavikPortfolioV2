"use client";

import { Card, Tabs } from "flowbite-react";
import { FaClipboardList, FaLightbulb } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";

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

export default function ResumeCards({ data, type }: ResumeCardsProps) {
  return (
    <Card href="#" className="!bg-slate-950 ">
      <Tabs aria-label="Default tabs" variant="default" className="text-sm">
        <Tabs.Item active title="Summary" icon={FaClipboardList}>
          <div>hello {data.category}</div>
        </Tabs.Item>
        <Tabs.Item title="Details" icon={HiDocumentSearch}>
          <div>hello {data.name}</div>
        </Tabs.Item>
        <Tabs.Item title="Skills" icon={FaLightbulb}>
          {type}
        </Tabs.Item>
      </Tabs>
    </Card>
  );
}
