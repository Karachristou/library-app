import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Book } from "./App";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

type BookTableProps = {
  books: Book[];
  setBooks: (books: Book[]) => void;
};

export default function BookTable({ books, setBooks }: BookTableProps) {
  function renderBook(book: Book) {
    return (
      <TableRow key={book.id}>
        <TableCell>
          <IconButton
            onClick={() => {
              setBooks(books.filter((b) => b.id !== book.id));
            }}
          >
            <DeleteIcon />
            Delete
          </IconButton>
        </TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.subject}</TableCell>
      </TableRow>
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Subject</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{books.map(renderBook)}</TableBody>
    </Table>
  );
}
