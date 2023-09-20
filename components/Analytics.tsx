"use client";
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export default function Analytics() {
  const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;

  if (!token) {
    return null;
  }
  return (
    <>
      <script
        async={process.env.NODE_ENV === "production"}
        src="https://www.googletagmanager.com/gtag/js?id=G-QLNVG5QJ02"
      ></script>
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token={token}
        async={process.env.NODE_ENV === "production"}
      />
    </>
  );
}
