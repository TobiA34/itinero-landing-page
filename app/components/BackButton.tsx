"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="btn btnGhost"
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}
