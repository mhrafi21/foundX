import Landing from "@/src/components/modules/home/Landing";
import RecentPosts from "@/src/components/modules/home/RecentPosts";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <Landing />
        <RecentPosts />
      </div>
    </section>
  );
}