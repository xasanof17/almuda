"use client";

export default function Analytics() {
  // const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  const token = "a919f42e-13a4-4e1c-aeea-4fb82c70b949";
  if (!token) {
    return null;
  }
  return (
    <script
      src="https://beamanalytics.b-cdn.net/beam.min.js"
      data-token={token}
      async
    />
  );
}
