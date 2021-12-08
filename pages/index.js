import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main>
        <Sidebar />
      </main>
      <h1>Hello</h1>
    </div>
  );
}
