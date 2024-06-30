import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMN, JOB_APPLICANT_DATA } from "@/constants";
import ButtonActionTable from "../ButtonActionTable";
interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = ({}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLUMN.map((item: string, i: number) => (
            <TableHead key={item + 1}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANT_DATA.map((item: any, i: number) => (
          <TableRow key={item.name + i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.applicantDate}</TableCell>
            <TableCell>
              <ButtonActionTable url=""></ButtonActionTable>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Applicants;
