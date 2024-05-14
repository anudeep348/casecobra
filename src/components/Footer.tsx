import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200"></div>

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center flex  flex-col gap-2 md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-sm text-muted-foreground">
              Devloped by{" "}
              <Link
                className="hover:border-b hover:border-slate-950"
                href="https://github.com/anudeep348"
              >
                Anudeep Chowday
              </Link>{" "}
              while learning Next.js from josh
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
