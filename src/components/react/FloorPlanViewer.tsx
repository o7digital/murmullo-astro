import { useState } from "react";

interface FloorPlanViewerProps {
  image: string;
  buttonLabel: string;
  description?: string;
}

const FloorPlanViewer = ({ image, buttonLabel, description }: FloorPlanViewerProps) => {
  const [open, setOpen] = useState(false);

  if (!image) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#007CAA] hover:text-[#006494] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007CAA]"
      >
        {buttonLabel}
        <span aria-hidden="true">↗</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-5xl max-h-full w-full rounded-2xl bg-white/95 p-4 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-2xl font-semibold text-ink/80 hover:text-ink"
              aria-label="Close floor plan"
            >
              ×
            </button>
            {description && <p className="mb-3 text-sm text-ink/70">{description}</p>}
            <img src={image} alt={description ? description : "Floor plan"} className="max-h-[70vh] w-full object-contain rounded-xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default FloorPlanViewer;
