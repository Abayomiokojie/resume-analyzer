import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zand" },
    { name: "description", content: "Tailor your resume to your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2 className="mt-4">
            Monitor the performance of your resumes across different job
            applications.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        <div className="animate-fadeIn mt-10 flex w-full max-w-4xl flex-col items-center justify-center rounded-lg bg-white/50 p-8 inset-shadow backdrop-blur-md">
          <img
            src="/images/analytics-dashboard.png"
            alt="Analytics Dashboard"
            className="w-full rounded-md shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
