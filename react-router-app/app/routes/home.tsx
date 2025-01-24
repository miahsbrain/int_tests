import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container h-full w-full mx-auto">
      <h2 className="text-2xl text-gray-700 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, atque!</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam libero reprehenderit obcaecati! Provident, et! Reprehenderit repellendus, adipisci amet praesentium facere natus facilis, cumque voluptates nulla est, quis nihil quasi!</p>
    </div>
  );
}