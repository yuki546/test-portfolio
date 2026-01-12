import Link from "next/link";
import { Button } from "./ui/button";
import { worksLimit } from "@/lib/constants";

type Props = {
  totalCount: number;
  currentPage?: number;
};

export default function Pagination(props: Props) {
  const pageCount = Math.ceil(props.totalCount / worksLimit);
  const currentPage = props.currentPage ?? 1;

  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: pageCount }).map((_, i) => (
        <Link key={i} href={`/works?page=${i + 1}`}>
          <Button variant={i + 1 === currentPage ? "default" : "outline"}>
            {i + 1}
          </Button>
        </Link>
      ))}
    </div>
  );
}
