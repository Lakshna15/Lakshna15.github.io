import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EECS Website Redesign — Case Study | Lakshna Dhanaraj",
  description:
    "A full UX redesign case study of UC Berkeley's EECS department website — from heuristic critique and user testing with 3 participants to a mobile-first final product achieving 100% task completion.",
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
