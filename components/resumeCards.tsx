"use client";

import { Card } from "primereact/card";
import {
  FaClipboardList,
  FaLightbulb,
  FaCalendarAlt,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { TabPanel, TabView } from "primereact/tabview";

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
    <Card
      className="shadow-lg rounded-lg bg-slate-800 hover:bg-slate-900 hover:border hover:border-blue-500"
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
      {/* <TabView
        pt={{
          panelContainer: {
            className: "px-2 py-0 mt-3",
          },
        }}
      >
        <TabPanel headerTemplate={tab1HeaderTemplate}>
          <div>
            <div className="flex items-center text-sm">{data.company}</div>
            <h2 className="font-bold text-xl mt-2">{data.name}</h2>

            <div className="flex items-center text-sm mt-2">
              <FaCalendarAlt className="mr-2 text-blue-400" />
              <span>
                {data?.startDate} - {data?.endDate ? data.endDate : "Present"}
              </span>
              <FaMapMarkerAlt className="mr-2 ml-3 text-blue-400" />
              <span>{data?.location}</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel headerTemplate={tab2HeaderTemplate}>
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel headerTemplate={tab3HeaderTemplate}>
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView> */}
    </Card>
    // <Card href="#" className="!bg-slate-950 ">
    //   <Tabs aria-label="Default tabs" variant="default">
    //     <Tabs.Item
    //       active
    //       title="Summary"
    //       icon={FaClipboardList}
    //       className="!bg-green-400"
    //     >
    //       <div>hello {data.category}</div>
    //     </Tabs.Item>
    //     <Tabs.Item
    //       title="Details"
    //       icon={HiDocumentSearch}
    //       className="!text-xs !text-red-600"
    //     >
    //       <div>hello {data.name}</div>
    //     </Tabs.Item>
    //     <Tabs.Item title="Skills" icon={FaLightbulb}>
    //       {type}
    //     </Tabs.Item>
    //   </Tabs>
    // </Card>
  );
}
