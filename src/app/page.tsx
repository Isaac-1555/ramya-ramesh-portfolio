import { fetchProfile, fetchProjects, fetchServices } from "@/lib/contentful";
import HomeClient from "./HomeClient";

export default async function Home() {
  const profile = await fetchProfile();
  const projects = await fetchProjects();
  const services = await fetchServices();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <HomeClient profile={profile} projects={projects} services={services} />
    </main>
  );
}
