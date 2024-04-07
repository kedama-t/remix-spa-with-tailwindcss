import { useLoaderData } from "@remix-run/react";
import type { ClientLoaderFunctionArgs } from "@remix-run/react";

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
  return params.page;
}

export default function Page() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">{data}</h1>
    </div>
  );
}
