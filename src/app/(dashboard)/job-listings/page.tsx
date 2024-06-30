import ButtonActionTable from "@/components/organisme/ButtonActionTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMN, JOB_LISTING_DATA } from "@/constants";
import { MoreVertical } from "lucide-react";
import { FC } from "react";

interface JobListingsProps {}

const JobListings: FC<JobListingsProps> = ({}) => {
  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>
      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMN.map((item: string, i: number) => (
                <TableHead key={item + 1}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTING_DATA.map((item: any, i: number) => (
              <TableRow key={item.roles + i}>
                <TableCell>{item.roles}</TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>{item.datePosted}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants} / {item.needs}
                </TableCell>
                <TableCell>
                  <ButtonActionTable url="job-detail/1"></ButtonActionTable>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default JobListings;
